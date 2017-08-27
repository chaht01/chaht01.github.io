---
layout: post
title: "Interactive3D #1 Camera"
date:   2017-08-23 13:57:55 +0900
categories: Interactive3D
comments: true
---



이글은 아직 Three.js를 본적이 없거나 이제 막 보려는 사람들이게 거의 하루먼저 본 사람이 적은 글 수준에 지나지 않을 가능성이 높습니다. 하지만 그런만큼 흥미를 느낄만한, 동시에 처음하는 사람 눈높이에서 설명해보겠습니다.

### 카메라

2차원 평면 공간에 무언가 그리고 보여주는 과정과 달리 3차원 공간은 정의되어야 할 것들이 생각보다 많아 처음부터 피곤하게 느껴집니다. 그 중에서 가장 낯설고 이해하기 어려운것이 카메라라고 생각됩니다. 

우린 사실 이미 3차원 공간으로 표현된 컨텐츠를 많이 봐왔습니다. 그 중 게임이 대표적이죠

![img](https://cdn-images-1.medium.com/max/1600/1*iIHR2MYFDS8exnAtYbAfPw.jpeg)테일즈위버

제가 즐겨했던 테일즈 위버라는 게임도 삼차원 공간을 표현하고 있습니다. 하지만 요즘 사람들이 많이하는 FPS류의 게임들과는 무언가 다른점이 있습니다. 던전을 구성하고 있는 기둥들의 높이가 모두 같다는점, 바닥을 구성하고 있는 타일들의 폭이 모두 동일하다는 점입니다. 

실제 우리는 세상을 원근법에 기초해서 바라봅니다. 멀수록 작게, 가까울수록 크게 보이는 이 단순한 원리는 재미있는 착시효과를 일으키기도 합니다. 이처럼 3차원 공간을 바라보는 카메라의 종류는 orthogonal과 perspective 두가지로 대표된다고 볼 수 있습니다.

![img](https://cdn-images-1.medium.com/max/1600/1*dG-Fu2u3sdiEeAKHOIUCTg.gif)

[출처](http://blog.db-in.com/cameras-on-opengl-es-2-x/) 

자연스러운 카메라 시점인 perspective에서는 소실점(Vanish-Point)가 존재합니다. 또한 이러한 특성을 표현하기 위해 몇가지 정보들이 카메라를 정의하는데 요구된다는 점입니다.

- aspect : 카메라의 종횡비를 의미합니다. 보통 삼차원 공간이 표현될 HTML5 canvas 의 가로/세로 비율을 의미합니다.
- fov(Filed of View) : 밑에서 설명하겠습니다.
- near clipping plane & far clipping plane : 카메라를 기준으로 표현할 가장 가까운 거리와 먼 거리에 해당하는 평면을 의미합니다.



### frustum

![img](https://cdn-images-1.medium.com/max/1600/1*vJzG8PgD6_Xlb0sRS0gbJw.jpeg)

피라미드와 같은 모형에서 바닥과 평행하게 잘라낸 단면을 frustum이라 부릅니다. 위 그림에서 노란 부분의 단면 직사각형으로 이해하면 되겠습니다. 

근본적으로 소실점이 존재하며, 원근법으로 대상을 바라보는 perspective 카메라에서는 직선이 어떻게 위치해 있느냐에 따라 카메라에서 보이는 결과가 달라질 수 있습니다. 가령 원기둥 막대가 카메라 렌즈 정중앙에 수직으로 세워져 있다면 카메라는 원기둥이 아닌 원의 단면만 보이게 될 것입니다. 마찬가지로 기둥을 위 그림에서 표시된 angle of view에 해당하는 호를 따라 이동시킨다면 이 역시 원만 보이게 될 것입니다. 이처럼 카메라를 정의하는데 있어서 단순히 aspect, near, far 뿐 아니라 카메라가 해당 비율의 화면을 어느정도 시야각으로 바라볼 것인지에대한 정보가 중요하게 됩니다. 이에 해당하는 정보가 field of view(fov) 입니다. 보통 화면 상단의 중심, 카메라 중앙(perspective 중심이라고도 합니다), 하단의 중심을 잇는 각을 fov로 정의합니다. 



### skycube

카메라의 이같은 성질과 앞선 포스트에서 소개한 texture mapping을 응용하면 간단하게 로드뷰 인터렉션을 표현할 수 있습니다.

[**three.js / examples**](https://threejs.org/examples/#webgl_materials_cubemap)

원리는 단순합니다. 공간을 표현할 정사각형 형태의 사진 6개로 큐브 내부를 구성하고, 큐브 내부에 카메라를 위치시킵니다. 큐브 내부를 이미지로 채우는데 사용된것이 Three.CubeTextureLoader() 입니다. 

사실 CubeTextureLoader는 내부에 imageLoader가 같이 포함된 구현 형태인데다가, 실제로 카메라를 큐브 내부로 위치시키는 코드가 표현되어 있지 않습니다. 때문에 이 부분에 대한 학습이 필요하다고 느끼신다면 아래의 링크를 참조해 보시는것도 좋을듯 합니다.

[**Three.js Cubemap Demo**](http://math.hws.edu/eck/cs424/notes2013/threejs/cube-map-demo.html)