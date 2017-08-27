---
layout: post
title: "Interactive3D #0 intro"
date:   2017-08-23 13:57:55 +0900
categories: Interactive3D
comments: true
---



### Interactive 3d 

좀 더 풍성한 아트웍 제작에 욕심을 내다보면 이내 표현할 수 있는 범위의 한계를 겪곤합니다. 주변 삼라만상을 표현하려는 욕심을 내다보면 얕게라도 표현 방법을 익혀보려고 하기 마련이기 때문이죠. 그럴땐 보통 한계를 깨닫고 다른 프로젝트를 기획하거나, 궁색하지만 그럴듯하게 만들어내기는 합니다만 보여주기 민망한 작품이 나오게 됩니다.

모든 기술을 다 배워볼수도, 능력이 된다 하더라도 시간이 허락하지 않기 때문에 적절히 기회비용을 고민해야 합니다만, 프레임워크, 라이브러리에 상관없이 3D 렌더링에 대해, 그리고 구현 방법에 대해 어느정도 배우고 가는게 맞다는 생각이 들어 이번 글부터 Udacity 오픈 강좌인 [Interactive 3D Graphics](https://classroom.udacity.com/courses/cs291)강좌의 내용을 정리해보고자합니다. 



### 3차원 좌표계

좌표계는 오른손 좌표계, 왼손 좌표계로 나뉩니다. 엄지를 x, 검지를 y, 중지를 z 좌표 증가 방향으로 정의하는 좌표 표현 방식입니다. ‘표현 방식'일 뿐이기 때문에 둘이 표현할 수 있는 범위나 대상은 완전히 일치합니다. 어떻게 ‘정의'하느냐의 차이일 뿐이겠죠.



### Tessellation

![img](https://cdn-images-1.medium.com/max/1600/1*WP208YXO_xRmeSKxwuAR7w.jpeg)

우리나라 말로 쪽매맞춤이라고 부른답니다(저도 처음알았습니다). 용어보다도 익숙한 사진처럼 ‘평면 도형을 겹치지 않으면서 빈틈이 없게 모으는 것’으로 소개되고 있는 tessellation은 실제 3d rendering의 중요한 개념입니다. 우리가 보는 모든 삼차원 렌더링 결과물들이 사실은 빈틈없이 모은 작은 도형들의 결과물이라는 것이죠. 특히 현대의 tessellation은 **triangulation**, 즉 삼각형만으로 평면도형을 모두 채우는 방식을 택하고 있습니다. 

실제로 모든 평면 도형은 삼각형으로 tessellation이 가능하며, instructor는 추가적인 문제로 서로다른 방법으로 triangulation하는 가장 minimum한 방법에 대해 알아볼것을 권하고 있습니다. 이 부분에 대해서 관심있으신 분들은 아래 포럼 게시글과 다음 두 subject로 검색해 보시기 바랍니다.

- <https://discussions.udacity.com/t/how-many-triangulations-for-a-polygon/87241>
- Euler’s Polygon Division problem
- Catalan number



### Vertex Ordering and Culling

![img](https://cdn-images-1.medium.com/max/1600/1*v0qcsWiz7EJ95cFzh1DX4w.png)

애당초 3차원 공간을 2차원 평면에 표현하는 것이기 때문에 입체 형태라면 보이지 않는 부분이 존재하게 됩니다. 이처럼 눈에 보이는 앞면이 아니어서 렌더링할 필요가 없어지는 부분을 backface culling 이라고 부릅니다.



![img](https://cdn-images-1.medium.com/max/1600/1*8i3018jkPvMStvCmPqAFVQ.png)

흥미로운점은 반드시 culling이 아닌 부분이라고 해서 보여지는것은 아니라는 겁니다. 보시는 바와같이 분명 backface는 아니기에 culling되는 부분이 아니지만 실제 시점에서는 가려져서 보이지 않는 부분도 존재하게 됩니다.



그렇다면 frontface인지 backface인지 어떻게 구별할 수 있을까요? 우리가 어떤 vertice를 표현하는데 사용하는 정보는 오직 해당 좌표의 차원 갯수 만큼의 위치 정보입니다. 따라서 애당초 triangulation으로 쪼갠 삼각형들이 앞면인지 뒷면인지 표현하려면 특수한 방식이 요구됩니다. 



![img](https://cdn-images-1.medium.com/max/1600/1*IsQdkG0TFjiaQaBBoJrjKQ.png)

이때 사용하는 방식이 위와같은 vertex ordering 입니다. 삼각형을 렌더링 하기 위해 세 점(vertice)를 제시할 때, 제시된 순서에 따라 frontface인지, backface인지 구분해 줄 수 있습니다. 



![img](https://cdn-images-1.medium.com/max/1600/1*iUp4BaJxTD89KJ7U7G1Alg.png)

실제로 Three.js 에서 geometry에 정의된 vertices array에 대해서, triangulate화한 삼각형들의 array인 faces에 새로운 삼각형을 넣을때는 각 점들의 index를 위와같이 넘겨주게 되어있습니다. 따라서 해당 점의 순서를 0,1,2 로 넘겨주느냐, 2, 1, 0으로 넘겨주느냐에 따라 frontface, backface를 구분할 수 있게 됩니다.



### Three.js

이쯤부턴 실제 구현을 위해 [Three.js](threejs.org/)를 사용하는 과제들이 등장하기 시작합니다. 강의 내용이나 설명 순서 모두 모자랄것 없이 수준에 맞춰 진행되기 때문에 급하신 분들도 Lesson 4부터는 들어보시기 바랍니다.

위에 잠깐 코드를 보여드렸지만, 기본적으로 Three.js는 webGL 로 렌더링 하는데 필요한 몇가지 방식들을 더 쓰기 쉽게끔 라이브러리화 한 것입니다. 우리가 native JS를 배우는것보다 jQuery를 먼저 배우면서 천천히 js에 대해 알아가듯이 Three.js도 '처음부터 webGL을 완벽하게 배워보겠다!'는 욕심으로부터 잠시 거리를 두게 만들어줄 좋은 도구라고 생각합니다(물론 업데이트 될때마다 변경사항이 잦은 편이라 코드 관리를 꾸준히 해줘야 한다고 들었습니다). 

Three.js는 아래의 방식으로 렌더링 됩니다.

![img](https://cdn-images-1.medium.com/max/1600/1*hbqzvIHT-HpoDAx7b9vUkw.png)

표현할 대상들인 Geometry의 다양한 형태를 규정하기 위한 Vertex와 삼각형인 Face3로 Geometry를 정의하고, 해당 모델의 질감을 표현해줄 Material을 다양한 방식으로 Texture화 하여 Mesh를 통해 모델링합니다. 모델링된 입체 대상(Mesh)과, 다양하게 제공되는 카메라(Camera), 빛(Light)을 장면(Scene)이라 부르는 대상에 add함으로서 프레임을 생성해 냅니다. 기본적으로 HTML5의 canvas에 렌더링하는 것이기 때문에 실제 interactive 3D를 표현하기 위해선 애니메이션 형태로 render해줘야 합니다. 이를 위해 WebGLRenderer를 통해 매 프레임마다 주어지는 Scene을 렌더하여 삼차원 공간의 대상을 표현하도록 만듭니다.

만일 Udacity의 강의를 듣기 어렵지만 잠깐이나마 개괄적인 Three.js의 구동 방식을 알고 싶다면 아래 링크를 참조해보길 바랍니다.

[http://davidscottlyons.com/threejs/presentations/frontporch14/](http://davidscottlyons.com/threejs/presentations/frontporch14/#slide-107)

다음 시간에는 간단하게 Three.js를 통해 마치 3차원 공간안에서 로드뷰를 보는듯한 interactive 공간을 연출해보도록 하겠습니다.