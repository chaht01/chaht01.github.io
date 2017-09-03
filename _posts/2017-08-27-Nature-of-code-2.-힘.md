---
layout: post
title: Nature of code 2. 힘
category: NatureOfCode
comments: true
---

학교 다닐때 물리라는 말만 들어도 기분이 별로 좋지 않았던 분들이 이번 글을 모두 다 읽었을때 기분이 좋아질 수 있다면 아마도 물리는 여러분이 생각하는것 만큼 불쾌한 학문은 아닐겁니다. 글을 적는 저는 사실 물리를 참 좋아했던 사람 중 한명이었고 때문에 nature of code의 이번 파트를 통해 힘을 다루게 되어 굉장히 즐겁습니다. 

솔직하게 말하면 nature of code를 한다고해서 잘 못하던 물리를 잘하게 되는것도 아니고, 이해가 안가던 법칙들이 갑자기 이해가 가게 되는것도 아닙니다. 하지만 프로세싱을 통해 구현한 힘, 그 결과가 이해를 도울 수 있을거라 생각합니다.



> 본 글부터는 `사용자 정의 PVector`가 아닌 processing에서 제공하는 `PVector` 클래스를 사용합니다.



### F=ma : 가속도의 법칙

앞서 `Mover` 클래스를 구현했던 바 있습니다. 마우스를 따라 움직이는 개체를 시각화함으로서 위치, 속도, 가속도의 개념에 대해 어렴풋하게 알 수 있었죠. 하지만 실제 물리 세계를 표현하기엔 `Mover`가 갖기 못한 속성이 하나 있었으니, 바로 질량(M, mass)입니다. 마우스를 따라오는 `Mover`의 상황엔 사실 `Mover`에 어떠한 '힘'이 가해졌다고 보는것이 맞을것이고, 힘과 대상과의 관계를 설명하는데 있어서 
$$
F=m\times a
$$
를 빼놓을 수 없다는 사실을 깨닫는다면 우리가 구현한 `Mover`클래스에 부족한것이 질량이라는것을 쉽게 알 수 있습니다. 그럼 질량 없이 우린 어떻게 '가속'의 개념을 계산했던걸까요?

```java
void update(){
    PVector mouse = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mouse, location);
    dir.normalize();
    dir.mult(0.1);
	acceleration = dir;
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.mult(0);
  }
```

단순하게 '마우스가 위치한 방향' 으로 힘이 가해진다고 생각했기 때문에 방향 벡터인 `dir`을 구한 뒤 적절한 크기로 `acceleration` 벡터로 사용했음을 알 수 있습니다. 그럼 기존의 `Mover`를 조금 수정하여 힘에 대한 법칙이 성립하도록 만들어 보도록 합시다.



```java
class Mover {
  PVector location;
  PVector velocity;
  PVector acceleration;
  float mass;
  Mover() {
    mass = random(1, 2);
    ...
  }

  void update() {
	...
  }

  void display() {
	...  
  }
}
```

기존의 코드에서 `mass` 부분만 클래스의 변수와 생성자에 할당되는 변수로 추가했습니다. 그럼 해당 질량을 이용할 상황은 어떤 때일까요? 사실 물체가 등속도 운동을 하는 상황에서 질량은 큰 의미가 없습니다. 등속도 운동을 한다는 것은 물체가 어떠한 힘도 추가적으로 받지 않는, 관성을 유지하고 있는 상황을 의미하기 때문입니다. 거꾸로 말하면 '힘을 받는 상황'에서 질량이 의미를 갖게 됩니다. 따라서 본래 힘 법칙을 설명하는 공식은 아래의 공식이 더 많은 의미를 잘 표현하고 있다고 할 수 있습니다.


$$
a = \frac{F}{m}
$$


그렇다면 `어떤 힘`이 주어졌을 때 `질량`을 가진 어떤 물체에 가속도가 적용되는 것이므로 힘을 물체에 적용할 함수 `void applyForce`를 정의해야 겠습니다. `Mover` 클래스 내부에 다음 함수를 추가합니다.

```java
void applyForce(PVector forceToApply){
  PVector force = forceToApply.copy();
  force.div(mass);
  acceleration.add(force);
}
```

적용할 힘을 복사하는 것은 `forceToApply`가 참조형으로 들어오는 객체이기 때문입니다(자세한 설명은 코드에 대한 내용이니 생략하겠습니다). 또한 `forceToApply`를 `mass`로 나눈것 자체를 `acceleration` 벡터로 하지 않는 것은 여러 힘이 같은 개체에 동시에 적용될 수 있기 때문입니다. 

```java
void update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.mult(0);
}
```

사실 이전에 설명하지 않고 넘어간 부분이 있습니다. 바로 `acceleartion.mult(0)`인데요, 힘이 '작용할 때'만 물체의 운동 상태에 변화를 줘야 하는 것이므로 '가속도'는 `applyForce`에 의해 가속도가 바뀔때만 그 의미를 가져야 합니다. 따라서 속도, 위치가 업데이트되는 매 순간마다 `acceleration`은 다시 0으로 초기화 되어야 합니다.



### 작용 반작용

뉴턴의 운동 3법칙이라고 불리는 작용 반작용은 모든 힘이 작용점에 대해서 힘을 받는대상과 주는 대상 모두에게 양방향 적용된다는 것을 의미합니다. 줄다리기 과정에서 줄을 당기면 우리의 발이 앞으로 미끄러져 나가는 것, 벽을 밀면 내 몸도 밀리는 현상, 친구 등짝을 치면 내 손바닥도 아픈것(?) 모두 작용 반작용의 결과입니다. 우린 아직 '충돌'을 구현하지는 않을것이고, 힘을 코드로 생성해내기 때문에 실질적인 반작용이 존재하지 않는 것처럼 보이지만 후에 다루게될 것입니다. 



### 만유인력

만유인력의 한 형태인 중력을 구현해봅시다. 만유인력은 아래와 같이 구해집니다.


$$
F = G\frac{m_{1} \times m_{2}}{r^2}
$$
두 물체가 서로를 끌어당기는 인력에 해당하는 만유인력은 결국 같은 크기의 힘이 서로 반대의 작용점에서 반대 방향으로 작용하는 '작용 반작용'의 대표적인 힘의 형태입니다. 지구가 사과를 끌어당기듯 사과도 지구를 끌어당기고 있죠. 하지만 앞서 살펴본 가속도의 법칙에 따라 질량이 사과에 비해 어마어마하게 큰 지구에 미치는 가속도의 영향력은 거의 0에 가깝기 때문에 사과만 떨어지는것으로 보입니다. 그럼 프로세싱에서 만유인력은 어떻게 구현되어야 할까요?

만유인력이 우선 universal한 힘의 종류라는 점에 착안하여 Mover 내부에 만유인력 상수인 `G`를 추가하거나 전역변수로 선언해도 될 것 같습니다. 또한 어떤 물체 `m`에 대해 또 다른 물체 `n`이 서로 만유인력이 적용되고 있는 상태라고 할 때, `n`에 의해 `m`이 받는 힘(방향만 다를 뿐 `m`에 의해 `n`이 받는 힘과 동일합니다)을 계산하기 위해  `Mover`클래스에 `attract` 함수를 아래와 같이 추가합니다.

```java
class Mover{
  float g = 0.6;
  PVector attract(Mover n){
    PVector force = n.location.copy();
    float distance;
    force.sub(location);
    distance = force.mag();
    force.normalize();
    distance = constrain(distance, 25, 50);
    force.mult(-1* mass * n.mass * g / (distance*distance));
    return force;
  }    
}

```

`attract`함수는 PVector를 반환하는 함수입니다. `m`이 `n`을 당기는 인력을 반환하는 함수이며, 굳이 바로 가속도를 계산하지 않고 힘을 반환하는 이유는 `applyForce`에서 해야할 역할로 나눠놨기 때문입니다. 만유인력 상수 `G`는 결과를 관찰해보면서 조정해봐도 무리 없습니다(어차피 우린 질량, 속도, 시간 모두 단위를 설정해주지 않았기 때문에 엄밀한 `G`를 선택하긴 어렵습니다). 

추가로 원래는 질량 개념이 없었지만 새롭게 추가되었으므로, 질량이 큰 `Mover`는 더 크게 표현되게 만들도록 `display`부분을 아래와 같이 바꿔줍니다.

```java
void display(){
  stroke(0);
  fill(175);
  ellipse(location.x, location.y, mass*8, mass*8);
}
```

> 책에서는 `Attractor`클래스를 지구와 같은 존재로 제시하면서 `attract` 메쏘드를 `Mover` 에서 분리하는 방식을 사용하고 있습니다만, 어차피 모든 대상과의 상호 만유인력을 모두 계산하는 과정을 구현해야 하므로 위 과정이 먼저 나와도 관계 없습니다.



이제 `Mover` 인스턴스 100개가 임의의 위치에 임의의 질량으로 존재한다고 하고, 메인 함수를 다음과 같이 바꾼 뒤 실행해 봅시다.

```java
Mover[] m;
void setup() {
  size(640, 640);
  m = new Mover[100];
  for(int i=0; i<100; i++){
    m[i] = new Mover();
  }
}
void draw() {
  background(255);
  for(int i=0; i<100; i++){
    for(int j=0; j<100; j++){
      if(i!=j){
        m[i].applyForce(m[j].attract(m[i]));
      }
    }
    m[i].update();
    m[i].display();
  }
}
```



100개의 물체들이 열심히 회전하듯 운동하는것을 관찰할 수 있죠? 정확한 중심 구점이 없는 상태지만 물체들끼리의 만유인력에 의해 '알아서' 운동하고 있는것을 볼 수 있습니다.

책에 나온 `attractor`를 이용하려면 간단하게 `Mover` 인스턴스를 하나 만들고, 해당 인스턴스의 질량을 굉장히 크게 만들어주면 됩니다. 물론 질량을 크게 만든다고해서 받는 힘이 평형을 이루게 되어 가속도가 0인 상황을 지속적으로 만들어 낼 수는 없지만 사방으로 일사분란하게 튀어다니는 `Mover` 들과는 달리 attractor는 비교적 완만하게 운동하는것을 볼 수 있습니다.

```java
Mover[] m;
Mover attractor;
int count;
void setup() {
  size(640, 640);
  count = 100;
  attractor = new Mover();
  attractor.mass = 10000;
  m = new Mover[count];
  for(int i=0; i<count; i++){
    m[i] = new Mover();
  }

}
void draw() {
  background(255);
  for(int i=0; i<count; i++){
    for(int j=0; j<count; j++){
      if(i!=j){
        m[i].applyForce(m[j].attract(m[i]));
      }
    }
    m[i].applyForce(attractor.attract(m[i]));
    attractor.applyForce(m[i].attract(attractor));
  }
 
  for(int i=0; i<count; i++){
    m[i].update();
    m[i].display();
  }
  attractor.update();
  attractor.display();
}
```

정 그래도 책에 나온것처럼 attractor를 움직이지 않는 고정점으로 두고 싶다면 

```java
  attractor.update();
  attractor.display();
```

이 부분을 없애주면 됩니다.



### 마찰력과 저항력

사실 마찰력과 저항력은 운동을 방해하는 힘처럼 작용하기 때문에 하나로 묶어서 설명하지만, 실제론 꽤 복잡하고 분리해서 봐야할 개념입니다. 우린 어차피 이번 단계에선 마찰력은 엄밀히 **운동마찰력**을 다룰것이기 때문에 물체의 운동에 저항하는 것으로 이해해도 충분합니다.

운동마찰력은 미끄럼 운동 마찰력 계수인  
$$
\mu_{k}
$$
와 수직항력 
$$
N
$$
의 곱이며, 방향은 속도 방향의 반대방향으로 작용합니다. 우린 물체가 바닥에 있는 상황의 운동을 가정할 생각이 없으므로, 사실 위 식보단 유체에 대한 저항력을 위주로 볼 생각입니다. 

물체가 물 속에 있다고, 또는 서로 다른 매질에서 운동한다고 가정해봅시다. 경험상 우린 물에서 그리고 기름에서 물체를 떨어뜨렸을 때 서로 다른 운동 양상을 보인다는걸 알고 있지요. 유체에 대한 저항력은 아래의 공식으로 정리됩니다.
$$
F_{d} = -\frac{1}{2}\rho v^2AC_{d}\hat{v}
$$


모든 계수 정보에 대해 알아야만 이번 실습을 진행할 수 있는건 결코 아닙니다. 사실 이번 과제의 핵심은 위 공식을 세부적으로 이해하는것이 아닌, 유체의 밀도에 해당하는 
$$
\rho
$$
와 유체에 대한 물체의 상대 속도인 
$$
v
$$
그리고 항력 계수인 
$$
C_{d}
$$
입니다. 더 자세히 가면 유체에 접촉하고 있는 표면적도 살펴야 하지만 간단히 정리하면 마치 운동 마찰력과 비슷하게 운동하는 방향에 반대방향으로, 매질의 특성에 따라 항력을 받는다는 것이고, 운동 마찰력과 다른 것은 속도 자체가 크기에 영향을 줄 뿐만 아니라 속도의 제곱에 비례한다는 점입니다. 같은 물체라 하더라도 유체 내에서 빠른 속력으로 운동하는 물체는 더 큰 항력을 받는다는 것이겠지요. 프로세싱으로 구현해서 그 결과를 확인하는데는 이 정도 정보면 충분합니다.

새롭게 유체에 해당하는 `Liquid` 클래스를 정의해 봅시다. 설명은 주석으로 확인가능합니다.

```java
class Liquid{
  float x, y, w, h, c;
  Liquid(float _x, float _y, float _w, float _h, float _c){
    x = _x; // 유체 시작점 x좌표
    y = _y; // 유체 시작점 y좌표
    w = _w; // 유체 가로 길이
    h = _h; // 유체 세로 길이
    c = _c; // 유체의 항력 계수
  }
  
  PVector drag(Mover m){
    PVector force = new PVector(0, 0);
    if(m.location.x>x && m.location.x<x+w
    && m.location.y>y && m.location.y<y+h){ // 정의된 유체 범위 안에 들어오면 저항력을 적용
      force = m.velocity.get();
      float v = force.mag();
      force.normalize();
      force.mult(v*v*-1);
      force.mult(c);
    }
    return force;
  }
  
  void display(){
    noStroke();
    fill(175);
    rect(x, y, w, h);
  }
}
```



이제 결과를 확인해 보기 위해 100개의 물체가 중력에 의해 떨어져서 바닥과 충돌하여 튕기는 화면을 구성해봅시다.

```java
Mover[] m;
Liquid liquid;
void setup() {
  size(640, 320);
  m = new Mover[100];
  liquid = new Liquid(0, 0, width/2, height/2, 0.1);
  for (int i=0; i<100; i++) {
    m[i] = new Mover();
  }
}
void draw() {
  background(255);
  liquid.display();
  for (int i=0; i<100; i++) {
    m[i].applyForce(liquid.drag(m[i]));
    m[i].applyForce(new PVector(0, 0.1 *(float)m[i].mass));
    m[i].update();
    m[i].checkEdge();
    m[i].display();
  }
}
```

보면 화면의 1/4 가량의 부분에 liquid를 둔 뒤, 생성된 물체가 어떻게 운동하는지 확인해 볼 수 있습니다. 자유롭게 유체의 크기와 위치를 바꿔서 비교해보면 재밌는 양상을 관찰해 볼 수 있습니다.