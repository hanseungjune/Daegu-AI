![header](https://capsule-render.vercel.app/api?type=cylinder&color=gradient&height=120&section=header&text=Welcome%20to%20Daegu-AI%20School&render&fontSize=45&animation=scaleIn)

# FrontEnd Course Schedule

## Day1

### 링크
<a href="https://velog.io/@hanseungjune/DAY1%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EC%9B%B9-%EA%B0%9C%EB%B0%9C-%EC%8B%9C%EC%9E%91%EA%B3%BC-%EC%A4%80%EB%B9%84-%EC%9B%B9-%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%85%94%EA%B0%80-%ED%95%98%EB%8A%94-%EC%9D%BC"><img src="https://img.shields.io/badge/Day1-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
☞ 몰랐던 코드는?
em : 기울임
mark : 형광펜
i : 기울임
del : 취소선(가운데)
ins : 밑줄
sub : 아래 첨자
sup : 위 첨자
span : 기능없음(CSS 효과 추가 가능)
lt;(왼쪽), gt;(오른쪽) : 꺽쇠(앞에 & 붙여야함)
amp; : &(앞에 & 붙여야함)
copy; : ©(앞에 & 붙여야함)
reg; : ®(앞에 & 붙여야함)
☆pre : 입력하는 대로 그대로 나타남
```

-----

## Day2~3

### 링크
<a href="https://velog.io/@hanseungjune/DAY23%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-HTML-%ED%83%9C%EA%B7%B81"><img src="https://img.shields.io/badge/Day2~3-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
1. < ol type="A" >
	- 리스트 형식을 type으로 지정하여 바꿀 수 있다는 것을 까먹고 있었는데 다시 한 번 알게됨.
  
2. < reversed >
	- ol 태그 뒤에 reversed를 기입하면, 내림차순(DESC)로 바뀜.
  
3. < ol start='숫자' >
	- 리스트 시작 번호를 해당 속성으로 설정할 수 있음.
  
4.  <dl>
        <dt>Coffee</dt>
        <dd>Black hot drink</dd>
        <dt>Milk</dt>
        <dd>White cold drink</dd>
    </dl>
    
    - dl은 리스트 정렬
    - dt는 설명대상
    - dd는 dt에 대한 설명
    
5. <img src=~~ title="커서가 포커스 될때 나오는 글씨" alt="렌더링 오류 방지용" >
	- title 속성과 alt 속성을 구분할 것.
  
6. < video width=~~ controls autoplay muted loop >
	- video 태그를 처음 써봄 / controls : 재생, 일시정지 등 제어 기능 
    				/ autoplay + muted : 자동재생 / loop : 반복 재생
            
7. <video width="200px" controls autoplay muted loop>
        <source src="./media/ch1.mp4" type="video/mp4">
   </video>
	- 이런 video 태그 삽입도 있음을 참고할 것. ( 사이즈 및 속성 설정에 편함 )
  
8. <iframe width="500" height="300" src="https://www.youtube.com/embed/kC4st0SvqqQ" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    - 유튜브에서 '소스 코드 복사' 를 누르면 <iframe> 태그와 함께 해당 소스가 나온다.
    - iframe 태그에 대해서 공부하고 싶으면, 해당 사이트를 참고할 것
    
9. <a href='#ch1'>해당 글씨를 누르면</a>
	---> <p id='ch1'>해당 부분으로 이동한다.</p>
    - 앵커라는 것인데 현재 벨로그 작성에도 적용해보았다. 편하다!
    
10. input 태그 --> disabled : 작성 불가 / maxlength : 최대 입력 길이 /
  list : 배열 설정 / radio 타입 시, name 동일하게 할 것 / <label for> = <input name>
  / onchange="document.body.style.color=this.value" : body 태그의 글씨 바꾸는 속성
  / 날짜 타입은 총 5가지 (type : value) 
  ---> ( month : 2020-12 / week : 2022-W30 / date : 2012-01-01 / datetime-local : 2012-01-01T06:10:10 / time : 21:30 )
  / range : 범위를 보여주는 input 태그의 속성( ex. 온도 )
  / number : 이것도 특정 단위로 범위를 제한하여 보여주는 input 태그의 속성 중 하나
  
11. datalist 태그는 사용자가 검색이 가능, select 태그는 사용자가 검색이 불가능 (선택이 한정적) 
	* datalist + option(value , label)
	* select + option

12. fieldset 으로 form 을 묶는다고 생각할 것
    * fieldset + legend
    
13. &deg; 는 섭씨 온도 단위 표시용 기호

14. small 태그로 fieldset 태그의 첨자로서 활용 가능 ( 코드 참고 )
```  
  
-----

## Day4
### 링크
<a href="https://velog.io/@hanseungjune/DAY4%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-BUTTON%EA%B3%BC-%EB%AC%B8%EC%84%9C-%EA%B5%AC%EC%A1%B0%ED%99%94"><img src="https://img.shields.io/badge/Day4-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
1. <!-- button 만들기 - 하는 일에 따라 type 지정 필요-->
    <!-- 
        <input type=" button / reset / submit / image ">
        <button type=" button / reset / submit ">
     -->
    <input type="button" onclick="alert('그냥 input 버튼')" value="그냥 버튼"><br>
    <button type="button" onclick="alert('그냥 input 버튼')">그냥 버튼</button>

2. <!-- reset 버튼 : 폼에 입력된 내용을 지우고 초기화하는 버튼 -->
    <form>
        아이디 : <input type="text"><br>
        <input type="reset" value="[button] 입력한 내용 지우기"><br>
        <button type="reset">[button] 입력한 내용 지우기</button>
    </form>
    
3. <!-- submit 버튼: 클릭하면 웹 브라우저가 폼 데이터를 웹 서버로 전송 -->

    <form action="#" method="get">
        아이디: <input type="text"><br>
        <input type="submit" value="[button]전송"><br>
        <button type="submit">[button]전송</button>
    </form>
    
4. <!-- image 버튼 : 아무 기능 없음. 자바스크립트 코드로 활용 -->
    <input type="image" src="">
    <button type="image">
        <img src="">
    </button>
    <!-- <input><button> 왜 같이 쓰냐? -->
    <!-- 1) <button>은 자식태그를 가질 수 있다.
         2) <button>은 CSS에서 가상 선택자로 꾸며줄 수 있다.
    -> input의 한계를 넘어 다양한 표현이 가능하다.
    -->
    
5. <form action="" method="">
        아이디: <input type="text"><br>
        <input type="submit" value="아이디중복확인">
    </form>
    
6. CSS 태그마다 의미를 이미지를 통해서 파악할 것
-> margin(바깥쪽 간격), padding(안쪽 간격)은 border 기준으로 판단
-> width : 너비, height : 높이 / % 는 window 기준으로
-> background : 배경색 바꾸는 용도(background-color도 가능)
-> display : block(옆에 못오게), inline(옆에 나란히 오게)
-> float : 완전히 왼쪽이나 오른쪽으로 붙이는 배치 설정
-> clear : both ( float 설정 해당 구간부터는 취소! )

```

---

## Day5
### 링크
<a href="https://velog.io/@hanseungjune/DAY5%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-HTML%EB%A1%9C-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%BC%88%EB%8C%80"><img src="https://img.shields.io/badge/Day5-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
1. inline 이라는 의미가 태그에 style 바로 작성하는것
    우선순위 최상위 포지션
    
2. CASCADE
    같은 태그에 여러 가지 스타일시트가 적용될 때 스타일이
    합쳐져서 적용됨(부모가 아니더라도)
    하나의 태그에 서로다른 CSS값을 적용하다보면 충돌 발생하기도함
    
3. sector, nav, main, article, aside 태그 있는거 몰랐음
    div 사용을 최대한 줄일 수 있겠군!
    
4. OVERRIDING
    오버라이딩(overriding) : 덮어쓰기.
    동일한 CSS 프로퍼티에 서로 다른 값은 설정하는 충돌 시
    우선순위가 높은 스타일을 적용하는 규칙
    스타일 우선순위(importance, Specificity, order)
      1> (제일 중요)사용자(클라이언트) 스타일시트 : ex.색맹을 위한 고대비설정을 무시할수는 없음
      2> !important - 어떤 스타일보다 우선 적용(css에 적으면 바로 적용됨)
      3> 일반 스타일시트
      4> 기본 브라우저 스타일 : ex.텍스트는 기본적으로 black 이다.
    스타일 상속
    (우선순위 높음)inline > id > class > tag

5. <a href="https://via.placeholder.com/300x200"> <!-- 이런식으로 이미지 사이즈 기록하는 방법

6.  div > strong, li > strong{
            color: dodgerblue; /* > 는 상속관계를 나타냄 __ 부모 > 자식 */
        }
        
7. body strong {
            color: green; /* 자손 관계(2단계 까지만) */
        }
```

-----

## Day6
### 링크
<a href="https://velog.io/@hanseungjune/DAY6%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80"><img src="https://img.shields.io/badge/Day6-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. 텍스트 셀렉터
  1) h3:first-letter
  2) a:link, active, visited
  3) li:first-child, nth-child(2n | 2n-1), last-child

2. Input[type=button]
  1) 태그 선택자라고 생각할것
  2) input태그는 응용가능, button태그는 응용불가능

3. font 시리즈
  1) 가볍게 확인 할 것.
  2) 특정 사이트 웹에서 폰트를 가져와서 사용하는 것
  3) 특정 사이트 웹에서 글꼴 폰트를 다운받은 후, ttf파일을 컴퓨터에서 못읽을 것을 대비하여, 
      woff 및 eot 파일도 같이 가지고와서 연결하는 것을 말함!(글꼴 폰트의 호환성을 높여줌)
  4) 아무런 행위를 하지 않고도 기본적으로 적용가능한 글꼴 형태
  
4. text-shadow, decoration, transform 및 white-space
  1) text-shadow: 가로(→), 세로(↓), 번짐정도(높을수록 번짐), 그림자 컬러
  2) text-decoration 은 보통 링크 밑줄 제거용(none) 으로 자주 사용함
  3) style="color:~" 적용은 사실 RGBA가 최고!
  4) text-transform 은 보통 uppercase, lowercase에 많이 사용.
  5) white-space 라는 속성이라도 외우자(5가지는 천천히!)
  6) letter-spacing 은 글자간, word-spacing 은 단어간
      1. em이라는 단위는 부모(기존설정)글꼴 기준으로 배수를 의미함.
      (별로 안중요함)

```

-----

## Day7
### 링크
<a href="https://velog.io/@hanseungjune/DAY7-1%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-Background"><img src="https://img.shields.io/badge/Day7.1-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a><a href="https://velog.io/@hanseungjune/DAY7-2%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-Text-List"><img src="https://img.shields.io/badge/Day7.2-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
1. Background-attachment
    1) fixed : 고정
    2) scroll : 비고정
    
2. Background-clip
    1) box-sizing 이랑 같은 개념
    
3. Background-image, repeat, size
    1) repeat은 보통 no-repeat
    2) size는 보통 cover
    
4. Background-origin
    1) 기준점을 잡는 태그라고 생각하면 된다.
    
5. Background-position
    1) 음... 나는 top center를 많이 썼던거 같다.
    
6. Background:linear-gradient, radial-gradient
    1) linear는 선형 ( 방향 및 색 )
    2) radial은 원형 ( 모양 및 범위 + 색 )
    
7. direction, text-align
    1) left, center, right
    
8. text-indent, line-height, overflow, text-overflow
    1) indent 는 들여쓰기
    2) line-height 는 줄 간격
    3) overflow는 보통 hidden을 많이씀
    4) text-overflow는 보통 scrollY로 해결

9. list-style-type, list-style-image
    1) list-style 는 보통 none을 써서 잘모름
    2) list-style-image로 image를 list 로 사용 가능
    
10. list-style-position
    1) inside 들여쓰기, outside 내어쓰기
```
-----

## Day8
### 링크
<a href="https://velog.io/@hanseungjune/DAY8%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EB%8F%8C%EB%A6%AC%EA%B3%A0-%EB%92%A4%EC%A7%91%EA%B3%A0"><img src="https://img.shields.io/badge/Day8-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
* 이번 파트는 좀 잘 안쓰기이기도하고 어려우니 페이지를 참고할 것

1. perspective, transform: rotateY(°), backface-visibility
2. box-shadow
3. display:block, inline-block, input:hover, input:focus..
4. caption-side
5. transform: translate(x, y), scale(x, y), skew(x, y), rotate(x, y)
6. transform-origin: 기준점 4곳
7. transition: property, duration;
8. transition-property, transition-duration

```

-----

## Day9
### 링크
<a href="https://velog.io/@hanseungjune/DAY9-1%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-border-style-radius"><img src="https://img.shields.io/badge/Day9.1-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a><a href="https://velog.io/@hanseungjune/DAY9-2%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-margin-padding-box-sizing"><img src="https://img.shields.io/badge/Day9.2-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a><a href="https://velog.io/@hanseungjune/DAY9-3%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-border-style-radius"><img src="https://img.shields.io/badge/Day9.3-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a><a href="https://velog.io/@hanseungjune/DAY9-4%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-displaynone-block-inline-inline-block"><img src="https://img.shields.io/badge/Day9.4-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. border-style
  1) 여러가지 많은데 그냥 solid랑 transparent 사용

2. border-radius
  1) 모서리를 둥글둥글하게 하는 것
 
3. margin 중첩
  1) margin은 똑같은 값이면 바로 인접할 마진끼리는 중첩된다.

4. padding
  1) border 안쪽 간격을 뜻하며, F12로 자주 확인해야할 부분

5. box-sizing
  1) 그냥 border-box 쓰는게 제일 나음
  
6. animation(keyframe)

    animation-name / animation-duration / animation-delay / animation-iteration-count /     
    animation-direction / animation-timing-function
    
    순으로 작성하고,
    
    @keyframe name { 
    0% { 내용 }
    50% { 내용 } 
    100% { 내용 }
    }
     
    의 방식으로 animation 과정을 적용한다.

 7. transform: 한 줄에 다 쓰기
   1) transform: 적용형식, 원근감, 회전축 순으로 작성한다.
 
 8. transition-timing-function
   1) linear, ease, ease-in, ease-out, ease-in-out
   
 9, display
   1) inline 은 텍스트 느낌으로 나란히 ( 크기 조절 불가 )
   2) block 은 박스 느낌으로 한줄을 모두 차지 ( 크기 조절 가능 )
   3) none 은 아예 없는 것으로 만들어서 자리를 빼버림
   4) hidden 은 있지만 숨김처리 ( 자리는 빼지 않고 그대로 둠 )
   5) inline-block 는 inline 처럼 나란히 배치 되지만, block 처럼 크기 조절 가능
```

-----

## Day10
### 링크
<a href="https://velog.io/@hanseungjune/DAY10-1%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-position-static-fixed-relativeabsolute"><img src="https://img.shields.io/badge/Day10.1-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>
<a href="https://velog.io/@hanseungjune/DAY10-2%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-float-z-index"><img src="https://img.shields.io/badge/Day10.2-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. position
  1) static 은 기본값
  2) fixed 는 scroll해도 항상 해당 화면 위치에 고정
  3) relative 는 기준, absolute는 relative 기준으로 위치됨 ( relative 없으면, window 기준 )
  4) 

2. float
  1) 해당 레이아웃 안에서 어디쪽 방향으로 치우치게 배치할지 정하는 것 ( 너비 조절 중요 )
  2) 항상 ::after 로 clear:both 해주면 좋다.

3. z-index
  1) 화면 앞으로, 뒤로 빼주는 것

```

-----

## Day11
### 링크
<a href="https://velog.io/@hanseungjune/DAY11-1%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80"><img src="https://img.shields.io/badge/Day11-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. :hover
  1) 마우스오버 시에 변화

2. div와 span
  1) div로 구역을 잘 정하고
  2) span으로 텍스트에 효과를 잘 나타내자

3. float 를 끝내고 항상 clear:both 처리하기

```

----

## Day12
### 링크
<a href="https://velog.io/@hanseungjune/DAY12-1%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%9C%EC%9E%91"><img src="https://img.shields.io/badge/Day12-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. .class를 쓰는 이유
  1) section의 형식이 동일한 경우, class를 통하여 한번에 모든 적용을 할 수 있다.

2. justify-content : space-evenly, align-items: center
  1) space-evenly 양 끝으로부터의 박스와 박스 간의 공백의 너비를 모두 동일하게 해주는 배치 방법
  2) align-items: center 는 가로로 중심축을 기준으로 하여, 배치하는 것을 말한다.

3. anquor ( #id로 지정해야함. )
  1) 해당 버튼을 누를 경우, 해당 위치를 window 객체화면의 왼쪽 상단으로 불러준다.
이를 '앵커'라고 한다.

```
-----

## Day13
### 링크
<a href="https://velog.io/@hanseungjune/DAY13-1%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%9C%EC%9E%91-%EB%B0%8F-%EB%A7%88%EB%AC%B4%EB%A6%AC"><img src="https://img.shields.io/badge/Day13-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. list를 flex로 가로 정렬하려면, 위와 같은 코드를 사용 해야 한다.
  1) display: flex → flex-wrap: wrap → align-items: center

2. 보통 가상 선택자는 before보다는 after를 많이 사용한다.

3. content: initial 은 초기화를 뜻한다.

```

-----

## Day14
### 링크
<a href="https://velog.io/@hanseungjune/DAY14%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Cafe-%EC%A0%9C%EC%8B%9C%ED%95%9C-%EC%A1%B0%EA%B1%B4%EC%9D%B4-%EB%94%B0%EB%A1%9C-%EC%9E%88%EC%9D%8C"><img src="https://img.shields.io/badge/Day14-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. HTML 구조는 다음과 같다고 생각하면 된다.
 
.container {
    	header { 헤더 내용 }
        .keypoint{
        	section1,2,3,4{ 내용 }
        	section5{ 내용
         		footer{ 내용 }   	
            }
        }
    }

→ 내용 넣는 것 보다 내용을 배치하는 레이아웃이 가장 시간 소모가 컸다.
→ 거의 대부분의 너비와 높이는 pxfh 지정하였기 때문에, 위치 잡는 것에 무리가 없었다.
→ display: flex / justify-content: center / align-items: center 의 중요성을 느꼈다.
→ position: relative, absolute 는 레이아웃의 핵심이다.
→ float를 사용하고 나서는 반드시 clear:both 처리를 꼭 하길 ( 추천은 가상선택자 )
→ background: linear-gradient( 방향, 색깔start, 색깔end ) 이 구조 까먹지말기.
→ clip-path: 를 통해서 background의 모양을 잡을 수 있었고, 다음 사이트를 이용하였다.
< 참고 : 이미지 원하는 모양대로 잘라주는 사이트 히히 >
→ clip-path 적용하기 전에 다음의 코드를 반드시 적용하기 바란다.

```

-----

## Day15
### 링크
<a href="https://velog.io/@hanseungjune/DAY15%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EB%B0%98%EC%9D%91%ED%98%95-CSS1#0-%EB%AA%A9%EC%B0%A8">
<img src="https://img.shields.io/badge/Day15-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. 반응형 CSS?

1) 장점
→ 모든 기기에서 접속 가능
→ 가로모드에 맞춰 레이아웃 변경 가능
→ 사이트 유지 관리 용이
→ 최신 웹 표준 따름

2) 단점
→ 사이트 디자인이 단순
→ 하위 버전 브라우저와 호환성 문제 있을 수 있음 -> 미디어쿼리는 CSS3 기술

→ 기본적으로 PC 버전과 Mobile 버전으로 구분함 ( 그래서 클래스도 구분 )
@media (min-width:600px) and (max-width:767px) 또는 둘 중에 하나만 사용하는 식
3개만 외우자! 1024px, 768px, 320px
→ 여기서는 Mobile 버전인 경우는 Max-width:99px로 걸어두고 나머지는 PC버전이라서, pc는 99px 이하부터 none이다. Mobile의 경우는 그 반대!

→ 너비 > 높이 ? (orientation:landscape)(가로 방향)
→ 너비 < 높이 ? (orientation:portrait)(세로 방향)

3) 모바일 first : 원래는 자신의 PC기준으로 만드는 게 정석인데, 모바일 너비의 기준으로 만드는 것을 '모바일 퍼스트' 라고 표현한다.

```

-----

## Day16
### 링크
<a href="https://velog.io/@hanseungjune/DAY16%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EB%B0%98%EC%9D%91%ED%98%95-CSS-%EB%B3%B5%EC%8A%B5-FLEX-%EC%99%80-GRID#%EC%86%8C%EA%B0%90">
<img src="https://img.shields.io/badge/Day16-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. grid 배치의 방식은 2가지!

1) column-count, column-gap
→ 한 화면에 보여지는 칼럼 갯수로 그리드를 설정한다.

2) display:grid, grid-template-columns: repeat(n, px)
→ 한 화면에 반복되는 칼럼 갯수와 그 칼럼 마다의 너비를 지정해줌

```

-----

## Day17
### 링크
<a href="https://velog.io/@hanseungjune/DAY17%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EB%B0%98%EC%9D%91%ED%98%95-CSS-%EB%B3%B5%EC%8A%B5#2-%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80-%EC%B5%9C%EA%B3%A0%E2%91%A0">
<img src="https://img.shields.io/badge/Day17-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
background-position: x-position y-position 
x-position : left, center, right
y-position : top, center, bottom, 

→ 이미지를 배경으로 쓸 때, 이미지 반복을 없애야한다.(no-repeat)
→ background-attachment는 fixed, scroll, local 이 있고, fixed랑 scroll은 뒤의 배경의 모습이 좀 다르다. local은 배경이 고정되지 않고 같이 스크롤 된다. ★★
→ background-position 은 위처럼 표현 가능하다. 이것도 내용 중요함! ★★★

→ object-fit은 보통 개별img나 item에 걸어주며, cover를 쓰면 이미지의 종횡비를 유지한 상태에서 이쁘게 이미지를 확대해줌
→ border-radius 는 다음의 이미지를 보고 이해하자.

→ max-width를 사용하면 미디어 쿼리를 딱 맞게 조절가능해보인다. (글씨 튀어나옴 방지)

→ list의 앞 부분에 번호를 자동으로 매겨주는 코드 조합이다.
근데 li:before 에 counter-increment: list; 와 content: counter(list); 를 같이 적어도 된다.
→ counter-increment 뒤에 ". " 이런 식으로 구분자를 둘 수도 있다.
→ 왼쪽은 \201C, 오른쪽 \201D 를 사용하면 큰따옴표가 나온다.

```

-----

## Day18
### 링크
<a href="https://velog.io/@hanseungjune/DAY18%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EB%B0%98%EC%9D%91%ED%98%95-CSS-%EB%B3%B5%EC%8A%B5#4-svg-animation-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-img-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-loading-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-getskeleton-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC">
<img src="https://img.shields.io/badge/Day18-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
1. outline-offset, clip-path
→ outline-offset은 border와 outline의 간격을 말한다.
→ clip-path:circle(); 는 내부의 이미지를 circle로 보여주기 위해서, circle()를 하였고, 이 주변으로 글씨를 자연스럽게 나열하기 위해서, shape-outside: circle(); 를 설정하였다.
→ width 설정할때 calc( 100% / 3 ) 을 써봐야겠다.

2. 변수지정, calc()
→ :root {} 안에 변수 선언하면, 전역선언!
→ 특정 태그 안에 변수 선언하면, 지역선언!
→ calc() 안에 var(변수명)을 넣고, 1px 을 단위로써 곱하면, width가 설정된다.

3. SCSS
→ 부모 상속 관계를 시각적으로 보면서 작업할 수 있음.
→ 변수는 $ 앞에 붙이면 변수 선언!
→ SCSS 파일 작성 후, 저장하면 저렇게 4개가 뜬다고 함.
→ @mixin 스타일 변수명 저장해서 @include로 불러와주면 되게 편하다.
→ @mixin은 SCSS의 함수라고 생각하자.

4. 각종 라이브러리(SVG, animation 라이브러리, IMG 라이브러리, loading 라이브러리, getskeleton 라이브러리)
→ 벨로그 들어와서 봐라! 
```

-----

## Day19
### 링크
<a href="https://velog.io/@hanseungjune/DAY19%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-BootStrap-v5.2#%EC%86%8C%EA%B0%90">
<img src="https://img.shields.io/badge/Day19-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
1. BootStrap 사용을 왜 할까?
- 디자이너 인력이 없을 때
- 쓸 만한 인터페이스 정도면 충분할 때
- 반응형 웹을 기본 지원하기 때문에

2. 이용 방법
- 블로그에 있는 CDN을 긁어와서 정해진 위치에 붙여넣기!
- 코드는 v5.2 이라서, 홈페이지에 업데이트 될 수 있음을 참고!
- example 탭으로 들어가서 복사해서 순차적으로 붙여넣기만 하면 된다.

3. 소감
- 의존하면 실력이 도태될 것 같아서, 참고정도만 하는게 맞다는 생각이 들었다.
- 그래도 쓸만하면 쓰자 ㅎ 제대로 된 템플릿 하나 만들어 봐야겠다.

```

-----

## Day20
### 링크
<a href="https://velog.io/@hanseungjune/DAY20%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-BootStrap-%EC%8B%A4%EC%8A%B5">
<img src="https://img.shields.io/badge/Day20_1-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>
<a href="https://velog.io/@hanseungjune/DAY202%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-BootStrap-%EC%8B%A4%EC%8A%B5">
<img src="https://img.shields.io/badge/Day20_2-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```
1. 첫번째 실습 부분
  - container-fluid는 모든 화면에서 width:100%
  - sm 사이즈 이하로 줄이면 navbar 는 세로 정렬 : navbar-expand-sm
  - ul:navbar-nav / li: nav-item / a: nav-link → 묶음!
  - nav에 navbar를 쓰지 않으면, 그 기능을 상실한다. ( 내가 지웠다가 써봄 )
  - ul: nav-pills, li: active → navbar 배경 채우기
  - hr: d-sm-none → small 사이즈 이상 되면 없어짐
  - col-sm-8 → small 사이즈 이상부터 8/12 차지
  - ms : margin-start
  - bi bi-twitch : icons 삽입
  

2. 두번째 실습 부분
  - navbar-expand-sm : 세로정렬 / fixed-top : navbar 화면 상단 고정 / navbar-brand : 로고를 나타냄
  - button 태그에는 navbar-toggler / span 태그에는 navbar-toggler-icon.
  - data-bs-toggle : collapse → navbar 형태구축 / data-bs-target : id명으로 해당 버튼으로 navbar 연결!
  - d-none, d-sm-block, d-flex flex-row / d-none : 기본적으로 보이지 않음 / d-sm-block : small 사이즈 이상이면 block으로 나타남 / d-flex : display: flex / flex-row : flex-direction: row
  - img-fluid : width: 100% 입니다!
  - d-none, d-md-block: 원래는 안보이지만, middle 사이즈 이상부터는 보임 / align-items-center → align-items: center; / text-white-50 : 50% 투명도 준 것  

```

-----

## Day21
### 링크
<a href="https://velog.io/@hanseungjune/DAY21%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-%EB%8B%B7%ED%99%88-%ED%98%B8%EC%8A%A4%ED%8C%85">
<img src="https://img.shields.io/badge/Day21-aec0cf?style=flat-square&logo=velog&logoColor=gray"/></a>

```

1. 웹서버 운영
2. 웹서버 구축
3. 무료 호스팅
4. FileZilla

자세한 정보는 위의 뱃지를 클릭하면 볼수 있다.

```
-----

# FrontEnd Study Schedule

![FrontStudy1](https://user-images.githubusercontent.com/92035406/169362359-49ef184a-c192-4a67-aca0-5e3f0683c5e1.gif)

### 링크
<a href="https://velog.io/@hanseungjune/FrontStudy%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%9C%EC%9E%91-1%ED%8E%B8#%E2%98%85-%ED%98%84%EC%9E%AC-%EB%AA%A9%ED%91%9C-%E2%98%85"><img src="https://img.shields.io/badge/Project_Day1-5D87BF?style=flat-square&logo=velog&logoColor=1A1F71"/></a>

```

1. titie 태그 기준으로 link를 위로, script를 아래로 정리하는게 좋다.

2. container로 반드시 전체 사이즈를 조절하는게 좋다

3. submenu는 반드시 main li 태그 안에다가 ul li a 순으로 만드는게 좋다.

4. CSS에서 변수로서 사용할 수 있는 프로퍼티가 :root이다.
    → 형태 : (변수명 : 컬러) / ex) color : var( 변수명 );

5. @media screen and (max-width:768px) { ~~~ } 으로 반응형 CSS 구현

6. submenu 위치 조정으로 transform: translate(x, y) 가 유용했다.

7. JS코드는 해당 페이지에서 확인 할 것! ( 햄버거 버튼 클릭 → 메뉴 짜란 / 카테고리 마우스오버 → 서브메뉴 짜란 )

```

-----

![FrontStudy2](https://user-images.githubusercontent.com/92035406/169641820-65c53154-9631-4814-a0eb-46ac91952df5.gif)

### 링크
<a href="https://velog.io/@hanseungjune/FrontStudy%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%9C%EC%9E%91-2%ED%8E%B8"><img src="https://img.shields.io/badge/Project_Day2-5D87BF?style=flat-square&logo=velog&logoColor=1A1F71"/></a>

```
1. 동영상 파일은 유튜브에서 소스 코드 복사를 하면 쉽게 불러올 수 있다.

2. nowrap을 걸어야 flex의 배치대로 옆으로 나란히 배치되면서, overflow: hidden이 적용된다. 그리고 -1024px 씩 이동하는 JavaScript 코드를 적용!

3. JS코드는 해당 페이지에서 확인 할 것! ( 특정버튼을 클릭하면, 원하는 화면으로 이동 )

```

-----

![FrontStudy3](https://user-images.githubusercontent.com/92035406/170296081-062ec377-5df2-408c-8730-4da77537b590.gif)


### 링크
<a href="https://velog.io/@hanseungjune/FrontStudy%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%9C%EC%9E%91-3%ED%8E%B8"><img src="https://img.shields.io/badge/Project_Day3-5D87BF?style=flat-square&logo=velog&logoColor=1A1F71"/></a>

```
1. display: flex, flex-wrap: wrap 로 list 를 적절하게 배치한다.

2. 해당 이미지로 커서가 이동하면, 뒤에 영상이 뜨는것은 absolute로 인하여 같은 위치로 가게 해서 가능하였다. 
그리고 :hover 할때 z-index를 주면서 이미지를 영상 뒤로 가게 하면 해당 효과를 만들어 낼 수 있다.

3. 오른쪽 상단에 Day ~ Years를 클릭하면, 각 리스트가 자리가 바뀌게끔 효과를 주는 코드이다. ( style.transform = translate(px) 효과를 적용 )

```

-----

![FrontStudy4](https://user-images.githubusercontent.com/92035406/170726632-b5c4ed4e-2435-4012-aa7c-c6a2a7d49f61.gif)


### 링크
<a href="https://velog.io/@hanseungjune/FrontStudy%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%9C%EC%9E%91-4%ED%8E%B8"><img src="https://img.shields.io/badge/Project_Day4-5D87BF?style=flat-square&logo=velog&logoColor=1A1F71"/></a>

```

1. absolute를 적용시켜서 버튼을 옮기기 위해 footer에 margin 값을 주기보다는 임의로 공간을 만들어서 그 공간에 relative를 적용함

2. window.scrollTo({top:0, left:0, behavior:"smooth"}); 를 버튼에 적용하여 자동스크롤 설정하는 것

```

-----

![FrontStudy5](https://user-images.githubusercontent.com/92035406/170726774-de55ad39-427d-48c1-8195-ff675a1fa9a0.gif)


### 링크
<a href="https://velog.io/@hanseungjune/FrontStudy%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%9C%EC%9E%91-5%ED%8E%B8#%EC%A0%95%EB%A6%AC"><img src="https://img.shields.io/badge/Project_Day5-5D87BF?style=flat-square&logo=velog&logoColor=1A1F71"/></a>

```

# 이번 작업을 하면서 느낀점

> - JS 작업이 생각보다 시간이 많이 걸리고 어려움
> - 반응형을 HTML 및 CSS를 만들때 마다 미리 적용해두는게 좋은듯
> - 마지막으로 병합할때는 div를 큰범위로 추가하여 위치 잡는게 좋아보임
> - JS 작업 중에서 위치를 바꾸는 걸 반응형 크기에 따라서 유도리있게 할수 있는부분을 공부해야할듯
> - 반응형 많이 안만듬 ( JS 구현 위주로 집중했다 )
> - 다음부터는 JS 구현보다는 반응형 위주로 해야겠다.
    - 768px 이하로 줄였을때 전체화면이 메뉴에 의해서 밀리는 모습 구현 희망
    - 1050px 이하로 줄이고 Day, week, month 등을 눌렀을때 똑같은 높이대로 겹치지않고 잘 이동하는 모습 구현 희망
    - 반응형은 1024px, 768px, 400px + 알파 의 기준으로 구분하기
```

-----

![Footer](https://capsule-render.vercel.app/api?type=transparent&color=gradient&height=100&section=footer&text=The%20End&animation=fadeIn&fontSize=30)
