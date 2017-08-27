---
layout: post
title:  "Nature of code 1. 벡터"
date:   2017-08-22 13:57:55 +0900
categories: NatureOfCode
comments: true
---

자연계에 존재하는 대상에 우리가 관심이 있고, 이를 표현하려는 부분은 대부분 ‘움직임'에 있을 것입니다. 우린 개념적으로나마 실재하는 대상을 매우 유사하게 표현하려는 욕구가 있습니다. 인상주의 화풍과 같이 실제 대상을 있는 그대로 그리지 않는 경우라도 결국 ‘그 대상의 표현' (그것이 대상 자체건, 대상을 보고 얻어진 자신의 느낌이건)에 집중하고 있다는 점만 보더라도 우리가 무언가를 있는 그대로 묘사하려는 욕구가 있다는것은 부정할수 없죠.

벡터는 이런 측면에서 대상을 표현할 가장 간단하면서도 직관적인 도구입니다. 만약 우리에게 벡터를 생각할 능력이 없었더라면(달리 말해 적절한 추상화 능력이 없었더라면) 표현할 수 있는 대상의 수와 범위가 줄어들고, 표현하더라도 그 복잡도가 매우 높았을것입니다.

### 정적 개념으로서의 벡터 ###

벡터는 고등학교 수학시간에 배우기 시작하지만 그 실제 용례에 대해서 익숙하게 받아들이는데는 많은 시간이 필요합니다. 우선 대표적으로 우린 벡터를 ‘화살표'로 받아들이기 때문에 대상의 ‘위치' 와 같은 정적 개념을 벡터로 받아들이는데 생각보다 많은 수고가 필요하죠.

기본적으로 ‘화살표' 라는 개념에서 출발한다면 벡터는 그 자체로 방향을 띄기 위해, 정의된 영역을 표현하기 위한 최소한 차원의 갯수 만큼의 값이 필요합니다. 즉 2차원이라면 x, y 값이, 3차원이라면 x, y, z 값이 필요합니다.

앞서 정적 개념으로서 ‘위치' 또한 벡터로     표현될 수 있다고 말씀드렸습니다. Nature of code에서도 이 부분을 강조하고 있는데요, 결국 어떤 물체의 ‘위치'는 기준이 되는 원점에서 시작되는 벡터로 표현이 가능하기 때문입니다. 그럼 왜 굳이 어떤 점(point)을 벡터로 표현하려고 할까요?

우리가 관심을 갖고있는 자연계를 이루는 대상들의 운동을 얘기함에 있어 ‘위치'와 ‘속도'의 개념은 매우 중요합니다. 문제는 위치나 속도나 모두 벡터로 표현될 수 있다는 점을 이해해야 합니다. 왜냐하면 우리가 느끼는 대상의 속도감, 운동 경로, 운동의 특성은 매 순간마다 우리가 판단하는 물체의 위치로부터 얻어지기 때문입니다.

애니메이션의 각 프레임들을 생각해보면 다음 프레임과 이전 프레임의 같은 대상의 차이가 크면 보는 사람 입장에서는 빠르게 이동했다고 느끼는것과 같지요. 즉 우리는 벡터를 통해 결국은 물체의 위치를 벡터로 표현하는것에 집중해야 합니다.

다시 정리하면 물체의 운동은

> 다음 위치 = 현재 위치 + 속도

임을 알 수 있습니다. 물리를 더 해보신 분들은 아시겠지만 아래의 재미있는 사실들도 존재합니다.

> 다음 속도 = 현재 속도 + 가속도

위 개념들은 모두 단위 '시간'에 대한 '변화량'에 대한 이야기로 미분과 적분의 이야기를 담고 있습니다(흥미로운 내용이긴 하지만 굳이 여기서 언급하진 않겠습니다).

### 벡터 연산 ###

벡터 연산을 위해 앞으로 `PVector`를 사용하도록 하겠습니다. `Pvector`에 포함된 연산들을 모두 열거하는 것은 이 글에서 다루지는 않습니다만 아래의 연산자들과 추가적으로 [프로세싱 공식 홈페이지](http://processing.org)를 통해 확인해 보실 수 있습니다.

```java
add() // 벡터 덧셈 연산
sub() // 벡터 뺄셈 연산
mult() // 벡터 곱셈 연산
div() // 벡터 나눗셈 연산
mag() // 벡터의 크기
normalize() // 벡터 정규화(방향이 같고 크기가 1인 단위 벡터로 설정)
```

``` java
PVector location = new PVector(3, 1);
PVector velocity = new PVector(1, 1);
PVector acceleration = new PVector (0.1, 0.03);

velocity.add(acceleartion);  // 다음 속도 = 현재 속도 + 가속도
location.add(velocity);		 // 다음 위치 = 현재 위치 + 속도
```



### Mover 클래스 ###

움직임의 관찰 대상을 표현해야 할 일이 많으므로 `Mover`클래스를 정의하여 프로세싱에 표현해보기로 합니다. `Mover` 클래스는 그 자체로 자신의 위치와 속도, 가속도 값을 모두 가지고 있도록 설계합니다(객체지향). 또한 특정 힘이 대상에 가해졌을때의 변화를 적용하기 위해 `void update()` 함수와 프로세싱 화면에 표현할 `void display()`를 정의해주도록 합시다.

```java
class Mover {
  PVector location;
  PVector velocity;
  PVector acceleration;

  Mover() {
    location = new PVector(random(width), random(height));
    velocity = new PVector(random(-2, 2), random(-2, 2));
  }

  void update() {
  	velocity.add(acceleartion);
    location.add(velocity);
  }

  void display() {
    fill(175);
    ellipse(location.x, location.y, 16, 16);
  }
}
```



### 마우스 방향으로 이동하게 만들기 ###

`Mover` 클래스도 만들었으니, 대상이 마우스 방향으로 이동하게끔 만들어 볼 수 있지 않을까요? `Mover`클래스에 대해 마우스를 따라 움직이는 개체를 정의하는 방법은 아래 두가지 `void update()`방법이 있습니다. 두 차이점이 무엇일지는 직접 코드로 옮겨서 확인해 보세요.

> 힌트 : 마우스 방향으로 움직이게 하느냐, 마우스 방향으로 속도가 변하게 하였느냐의 차이입니다. 이 부분은 다음장인 **'힘'**과도 긴밀하게 연결됩니다.

```java
void update(){
    PVector mouse = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mouse, location);
    dir.normalize();
    dir.mult(1);
    velocity = dir;
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.mult(0);
  }
```

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





