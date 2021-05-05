import React from "react";
import pxToVw from "../../Helper/pxToVw";
import styled from "styled-components";
import "./bg_css.css";

const SkewText = styled.div`
  position: absolute;
  width: 250vw;
  left: 50vw;
  top: 30vh;
  font-size: ${pxToVw(14)}px;
  line-height: 2;
  transform: translateX(-50%) rotate3D(1, 1, 1, -60deg);
`;

const ChatLog = styled.div`
  display: inline-block;
  padding: 2px;
  color: rgba(255, 255, 255, 0.5);
`;

class ChatTransition extends React.Component {
  constructor() {
    super();
    this.state = {
      curr: [],
      sid: -1,
      start: -1
    };
    this.animation = this.animation.bind(this)
    this.init = this.init.bind(this)
  }
  componentDidMount(){
    this.init();
  }

  animation(timestamp){
    if(this.state.start == -1){
      this.setState({start: timestamp})
      let count = Math.floor(Math.random() * 5) + 4;
      let this_ref = {};
      while (Object.keys(this_ref).length < count) {
        let cand = Math.floor(Math.random() * 16);
        this_ref[cand] = 1;
      }
      this.setState({
        curr: Object.keys(this_ref).map(k => Number(k))
      });
    }else{
      if(timestamp - this.state.start>1500){
        this.setState({start: -1})
      }
    }
    window.requestAnimationFrame(this.animation)
  }
  init() {
    const sid = window.requestAnimationFrame(this.animation);
    this.setState({
      sid
    });
  }

  componentWillUnmount(){
    window.cancelAnimationFrame(this.sid);
  }
  render() {
    return (
      <SkewText>
        <ul id="chat" className="embed__chat">
          
          
          <ChatLog>
            <span>
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              마지막 장면은{" "}
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
              가 잘 한건 맞고, 갑자기 사라져버렸으니 뱅도 뭐 그렇다 치는데.....
            </span>
          </ChatLog>
          <ChatLog>
            크으 뱅이 케리했다!
          </ChatLog>
          <ChatLog>
            뱅뱅뱅
          </ChatLog>
          <ChatLog>
            롱주 재평가 ㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            3연말자하!!
          </ChatLog>
          <ChatLog>
            코장우냐 ㅠㅜ
          </ChatLog>
          <ChatLog>
            트레이스 코치로 우승컵 들었네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우째;;
            </span>
          </ChatLog>
          <ChatLog>
            뱅 방출하자
          </ChatLog>
          <ChatLog>
            <span>
              엠비션{" "}
              <span className={"keyword key12 "+ (this.state.curr.indexOf(12)>-1 ? 'show': 'hidden')} style={{ background: "#e7ba52" }}>
                너무
              </span>{" "}
              멋있다
            </span>
          </ChatLog>
          <ChatLog>
            뱅뱅뱅했다
          </ChatLog>
          <ChatLog>
            흐;;
          </ChatLog>
          <ChatLog>
            뱅나가자
          </ChatLog>
          <ChatLog>
            아 노잼
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key1 "+ (this.state.curr.indexOf(1)>-1 ? 'show': 'hidden')} style={{ background: "#ad494a" }}>
                엠비션
              </span>{" "}
              1세대 아님?
            </span>
          </ChatLog>
          <ChatLog>
            슼 대진운 에휴
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            하루 개꿀~~
          </ChatLog>
          <ChatLog>
            야 뱅 엎드려
          </ChatLog>
          <ChatLog>
            뱅 장례식
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>
              이 이김?
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅 은퇴해라{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              끝이다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              아 근데{" "}
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>{" "}
              또 찢어질꺼 같다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅차이{" "}
              <span className={"keyword key4 "+ (this.state.curr.indexOf(4)>-1 ? 'show': 'hidden')} style={{ background: "#8c6d31" }}>
                무엇
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            뇌신 운다
          </ChatLog>
          <ChatLog>
            뱅출 ㅅㄱㅇ
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              욕 안하고 싶은데 뱅 한대치고싶다ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              원딜차이{" "}
              <span className={"keyword key12 "+ (this.state.curr.indexOf(12)>-1 ? 'show': 'hidden')} style={{ background: "#e7ba52" }}>
                너무
              </span>
              심한데
            </span>
          </ChatLog>
          <ChatLog>
            SㅋT
          </ChatLog>
          <ChatLog>
            <span>
              선수 그만 까고{" "}
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>{" "}
              응원해주세요 삼성이 우승했는데
            </span>
          </ChatLog>
          <ChatLog>
            뱅이 계좌 확인좀
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key1 "+ (this.state.curr.indexOf(1)>-1 ? 'show': 'hidden')} style={{ background: "#ad494a" }}>
                엠비션
              </span>{" "}
              클라스 입증...
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              오늘은 할말이없네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              룰러{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              개 미쳤다
            </span>
          </ChatLog>
          <ChatLog>
            스크트 지금까지 우승 그렇게 했으면 줄떄됨
          </ChatLog>
          <ChatLog>
            <span>
              욕설, 인신공격, 도배, 음란성 채팅은 제재 대상이 되오니 주의 당부
              드립니다.
            </span>
          </ChatLog>
          <ChatLog>
            뱅출각
          </ChatLog>
          <ChatLog>
            뱅 재평가 ㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            뱅 퇴출해라
          </ChatLog>
          <ChatLog>
            말이 없다
          </ChatLog>
          <ChatLog>
            사망 ㅠ
          </ChatLog>
          <ChatLog>
            울어?
          </ChatLog>
          <ChatLog>
            <span>
              떼이귀
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            뱅은한동안 고생하겠네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            드르렁
          </ChatLog>
          <ChatLog>
            어우슼ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            BibleThump BibleThump BibleThump
          </ChatLog>
          <ChatLog>
            <span>
              떼이귀{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜㅜㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            뱅이 준식했다
          </ChatLog>
          <ChatLog>
            ㅡㅋㅋ
          </ChatLog>
          <ChatLog>
            뱅 표정
          </ChatLog>
          <ChatLog>
            헐 퍼에키ㅓ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ 울지마
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              점멸 궁 차이{" "}
              <span className={"keyword key4 "+ (this.state.curr.indexOf(4)>-1 ? 'show': 'hidden')} style={{ background: "#8c6d31" }}>
                무엇
              </span>
              ????
            </span>
          </ChatLog>
          <ChatLog>
            ㅉㅉ ㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘탈 ㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              돈 받은듯
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              저러는거 처음본다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘붕
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우냐
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              혁아 울지마{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key13 "+ (this.state.curr.indexOf(13)>-1 ? 'show': 'hidden')} style={{ background: "#8ca252" }}>
                100
              </span>
              점~
            </span>
          </ChatLog>
          <ChatLog>
            아...
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘탈 터졌네
            </span>
          </ChatLog>
          <ChatLog>
            야 야야 우냐?
          </ChatLog>
          <ChatLog>
            뱅ㅋ
          </ChatLog>
          <ChatLog>
            워후루후루ㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            축하한다 엠빠따!!
          </ChatLog>
          <ChatLog>
            센빠이 운다ㅠ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key13 "+ (this.state.curr.indexOf(13)>-1 ? 'show': 'hidden')} style={{ background: "#8ca252" }}>
                100
              </span>
              재윤
            </span>
          </ChatLog>
          <ChatLog>
            apsxkfskrka
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              .,...
            </span>
          </ChatLog>
          <ChatLog>
            캬하하 로이조 영입 각이다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ..
            </span>
          </ChatLog>
          <ChatLog>
            뱅방출각ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              페이커 운다{" "}
              <span className={"keyword key6 "+ (this.state.curr.indexOf(6)>-1 ? 'show': 'hidden')} style={{ background: "#393b79" }}>
                ㄷㄷ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            갓이커;;;
          </ChatLog>
          <ChatLog>
            3 대 떡
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            싱혁이
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              운다..
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅 개오지네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            상혁아 ㅜㅜㅜㅜㅜㅜㅜㅝㅜ
          </ChatLog>
          <ChatLog>
            뱅새@끼그냥나가뒤져라이개@쌔@씨갸씨@빨
          </ChatLog>
          <ChatLog>
            빠커센세..
          </ChatLog>
          <ChatLog>
            상혁이 ㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              운다
            </span>
          </ChatLog>
          <ChatLog>
            폐석대
          </ChatLog>
          <ChatLog>
            FAKER
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            앰비션 만세
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              개빡
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              아
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              울어?
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ...
            </span>
          </ChatLog>
          <ChatLog>
            느그혁 ㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>
              바루스 삼성잔나
            </span>
          </ChatLog>
          <ChatLog>
            흑흑
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              폭발당했네..
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 우는 거 첨봐{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              페이귀{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            뱅이 극복시켜줌 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              저런거 처음봤어..
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              와
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              아픈거아님?
            </span>
          </ChatLog>
          <ChatLog>
            숙면중ㅋㅋ
          </ChatLog>
          <ChatLog>
            배고프데
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            로얄이겨주고 우승도주냉
          </ChatLog>
          <ChatLog>
            그원딜
          </ChatLog>
          <ChatLog>
            퇴이커.....
          </ChatLog>
          <ChatLog>
            이 정도 경기를 뒤집히다니
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅈㄴ빡치겟다.
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            준식이를 왜 데려오냐
          </ChatLog>
          <ChatLog>
            <span>
              뱅 대신 헬퍼급 원딜 캬하하 등판해야. 뱅 대신 헬퍼급 원딜 캬하하
              등판해야.뱅 대신 헬퍼급 원딜 캬하하 등판해야.뱅 대신 헬퍼급 원딜
              캬하하 등판해야.
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              야??;
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              빠커 센세{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              첫 좌절 아님? ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            상혁아..
          </ChatLog>
          <ChatLog>
            상혁이 고생했다
          </ChatLog>
          <ChatLog>
            분싸...ㅜㅜ
          </ChatLog>
          <ChatLog>
            우냐? ㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              혁아 울지마{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            빠커 멘탈 ㄷ
          </ChatLog>
          <ChatLog>
            <span>
              상혀강...
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
              갓
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜㅜㅜㅜㅜㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            3대 떡 ㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              가 운다 ㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              이제 중국감 ㅅㄱ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              맴찢...ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              불쌍하다
            </span>
          </ChatLog>
          <ChatLog>
            야 우냐?
          </ChatLog>
          <ChatLog>
            라인전 다 이겨도 다른 라인에서 터지는데
          </ChatLog>
          <ChatLog>
            이건 바텀차이가...
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              화병으로 사망...
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              지가 다했는데
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ느그혁 ㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ 원맨팀 불쌍하다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우냐 ??? ㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>{" "}
              화이팅!
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              재혁이형{" "}
              <span className={"keyword key2 "+ (this.state.curr.indexOf(2)>-1 ? 'show': 'hidden')} style={{ background: "#7b4173" }}>
                ㄹㅇ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              진짜 불쌍하다
            </span>
          </ChatLog>
          <ChatLog>
            스킨타령하더니 졌죠?
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              가 울다니...
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 잘했어
            </span>
          </ChatLog>
          <ChatLog>
            센빠이 ㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            코리아 킬러네 10색이들 삼숑
          </ChatLog>
          <ChatLog>
            뭐하냐 뱅
          </ChatLog>
          <ChatLog>
            원딜차이 오죴다
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              맨탈
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key6 "+ (this.state.curr.indexOf(6)>-1 ? 'show': 'hidden')} style={{ background: "#393b79" }}>
                ㄷㄷㄷ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              kt가자 ;;
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
              갓 ㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              함성
              <span className={"keyword key6 "+ (this.state.curr.indexOf(6)>-1 ? 'show': 'hidden')} style={{ background: "#393b79" }}>
                ㄷㄷㄷ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상현아
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              이제 skt나간다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>{" "}
              우승!
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              빡침
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘탈나갓네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            누구를 위해 향로미드한거냐
          </ChatLog>
          <ChatLog>
            왼쪽 쳐도 무죄 인정한다
          </ChatLog>
          <ChatLog>
            몇인분을 해야 이기냐 ㅜㅜ
          </ChatLog>
          <ChatLog>
            방생궁 실화녀 ㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            상혁이 빡치겠다
          </ChatLog>
          <ChatLog>
            카르마픽 오바엿어 ㅋ
          </ChatLog>
          <ChatLog>
            사람봐
          </ChatLog>
          <ChatLog>
            <span>
              혁아 울지마{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              인사하러가지마{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 울만하지 십ㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            빛상혁 : 뱅 때문에 아 개빡친다
          </ChatLog>
          <ChatLog>
            탑정글이 제정신아니야
          </ChatLog>
          <ChatLog>
            뱅 개노답
          </ChatLog>
          <ChatLog>
            이걸...
          </ChatLog>
          <ChatLog>
            뱅이 다 해먹었네 ㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              진짜{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 뭔죄냐
            </span>
          </ChatLog>
          <ChatLog>
            아..
          </ChatLog>
          <ChatLog>
            슼 요번 커리어 스프링 우승 끝;;
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              미국가라
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 울어도 된다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁아{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘탈터짐;
            </span>
          </ChatLog>
          <ChatLog>
            뱅 ㄱ ㅆ ㄲ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              개 꼬시네 ㄹㅇ ㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              .....
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              화병으로 삼아
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              얼마나 빡칠까
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              세체원{" "}
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 울어도 ㅇㅈ
            </span>
          </ChatLog>
          <ChatLog>
            감동의 골마
          </ChatLog>
          <ChatLog>
            센빠이..
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            신났네
          </ChatLog>
          <ChatLog>
            와 인구봐
          </ChatLog>
          <ChatLog>
            야야 우냐? ㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              저런거 처음봤는데?
            </span>
          </ChatLog>
          <ChatLog>
            ㄱ
          </ChatLog>
          <ChatLog>
            <span>
              우리
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              센빠이{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            뱅이 다했다
          </ChatLog>
          <ChatLog>
            꿀잠
          </ChatLog>
          <ChatLog>
            뱅 옆에 눈치보는거보소
          </ChatLog>
          <ChatLog>
            뱅 다음부터 못보는거냐
          </ChatLog>
          <ChatLog>
            주먹으로 졸라치고싶겠다
          </ChatLog>
          <ChatLog>
            <span>
              상혁아{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            3연 우승 각이었는데 아쉽다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              저러는거 첨 본다
            </span>
          </ChatLog>
          <ChatLog>
            너 우냐? 울어?ㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            페젖 커
          </ChatLog>
          <ChatLog>
            ㅜㅜ
          </ChatLog>
          <ChatLog>
            뱅이 다했다
          </ChatLog>
          <ChatLog>
            <span>
              중국팬: "RNG가{" "}
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>{" "}
              2번이나 이겼으니 사실상 RNG 1위!"
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              뭔 죄냐 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              개빡치겠다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              느잘했ㄴ느데..
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              도 마지막판에 꽤 던져써
            </span>
          </ChatLog>
          <ChatLog>
            굳
          </ChatLog>
          <ChatLog>
            ㅇㅅㅇㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              다른팀 가자
            </span>
          </ChatLog>
          <ChatLog>
            중국 팬들 호응좋네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우냐?
            </span>
          </ChatLog>
          <ChatLog>
            뱅 뻘줌
          </ChatLog>
          <ChatLog>
            <span>
              세체원{" "}
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            원딜이 1인분만 해도 이기는걸
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              빡침
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘탈나갔네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              개빡
            </span>
          </ChatLog>
          <ChatLog>
            빛 상 혁 자 네
          </ChatLog>
          <ChatLog>
            3대 떡..
          </ChatLog>
          <ChatLog>
            뱅노답
          </ChatLog>
          <ChatLog>
            <span>
              상혁아 ㅠㅠㅠㅠ{" "}
              <span className={"keyword key13 "+ (this.state.curr.indexOf(13)>-1 ? 'show': 'hidden')} style={{ background: "#8ca252" }}>
                100
              </span>{" "}
              개객끼
            </span>
          </ChatLog>
          <ChatLog>
            뱅 방출 ㄱ]
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            뱅 돈받앗노
          </ChatLog>
          <ChatLog>
            <span>
              우승 '당했다'{" "}
              <span className={"keyword key2 "+ (this.state.curr.indexOf(2)>-1 ? 'show': 'hidden')} style={{ background: "#7b4173" }}>
                ㄹㅇ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅중심 픽밴인데 뱅이 던지면/ 뱅중심 픽밴인데 뱅이던지면/ 뱅중심
              픽밴인데 뱅이 던지면/ 뱅중심 픽밴인데 뱅이던지면/ 뱅중심 픽밴인데
              뱅이 던지면
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              안돼{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ..
            </span>
          </ChatLog>
          <ChatLog>
            킹ㅡ비ㅡ션
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              다때려 부셔도 무죄다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁아{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              키보드들어서 뱅 데가리 깨라 ㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            센빠이는 욕하지 마라
          </ChatLog>
          <ChatLog>
            <span>
              와 뱅{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>
              ..... 브실골인데?
            </span>
          </ChatLog>
          <ChatLog>
            빛빠따
          </ChatLog>
          <ChatLog>
            빛 성
          </ChatLog>
          <ChatLog>
            뱅이 다 망침
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>{" "}
              세 최원 ㅅㄱ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              센빠이 저러는거{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              처음 본다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              무슨 죄냐 아오
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              를 울린 남자 뱅!!!
            </span>
          </ChatLog>
          <ChatLog>
            원딜차이가 이걸....
          </ChatLog>
          <ChatLog>
            상혁아 떠나자
          </ChatLog>
          <ChatLog>
            ㅃ바커센바이
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              살인해도 정당방위 ㅇㅈ
            </span>
          </ChatLog>
          <ChatLog>
            뱅이 다 말아먹었네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key13 "+ (this.state.curr.indexOf(13)>-1 ? 'show': 'hidden')} style={{ background: "#8ca252" }}>
                100
              </span>
              역배충
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁아{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            센빠이 멘탈
          </ChatLog>
          <ChatLog>
            앰비션 구락스 다 잡음 ㅅㄱ
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              ㅡㅡ
            </span>
          </ChatLog>
          <ChatLog>
            능욕 하러간다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>{" "}
              갓
            </span>
          </ChatLog>
          <ChatLog>
            뱅 교체해라 내년에..
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              skt 정떨어져서 나가겠다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              가짤려서 맨탈나갔나본데
            </span>
          </ChatLog>
          <ChatLog>
            배준식 새ㅡ끼야 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            우는거 처음보는거 같은데
          </ChatLog>
          <ChatLog>
            <span>
              뇌신니뮤
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key8 "+ (this.state.curr.indexOf(8)>-1 ? 'show': 'hidden')} style={{ background: "#bd9e39" }}>
                큐베
              </span>{" "}
              근엄한것보소
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              하{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁아 울지마{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              개 꼬시다
            </span>
          </ChatLog>
          <ChatLog>
            꿀드컵 이어따
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘탈 나감ㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              페이커 우는거 처음아니냐{" "}
              <span className={"keyword key6 "+ (this.state.curr.indexOf(6)>-1 ? 'show': 'hidden')} style={{ background: "#393b79" }}>
                ㄷㄷㄷ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              뱅한테 페드립쳐도 용납
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key7 "+ (this.state.curr.indexOf(7)>-1 ? 'show': 'hidden')} style={{ background: "#d6616b" }}>
                피넛
              </span>{" "}
              덕에 지네요
            </span>
          </ChatLog>
          <ChatLog>
            상혁아 중국가자 그냥 BibleThump
          </ChatLog>
          <ChatLog>
            뱅 방출
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              상혁이가 얼마나 열심히햇는데
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰ㅡ,ㅡㅡㅡㅡㅡㅡㅡ러
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅쉬털련아{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              어칼꺼야
            </span>
          </ChatLog>
          <ChatLog>
            니네도 3대떡
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              중국가자
            </span>
          </ChatLog>
          <ChatLog>
            너 우냐?
          </ChatLog>
          <ChatLog>
            뱅이 해냈다
          </ChatLog>
          <ChatLog>
            <span>
              100 너무했다 결승전은{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰-러
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅때문에{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              울잖아 ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key2 "+ (this.state.curr.indexOf(2)>-1 ? 'show': 'hidden')} style={{ background: "#7b4173" }}>
                ㄹㅇ
              </span>
              처음본다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              스크{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              놓아주자
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              안 울면 말이 안되지 애들 다던졌는데
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              팀캐리좀 받았으면 ㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              빠커{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            빛 자
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              맨탈ㄹ 터진거 처음본다;;;'
            </span>
          </ChatLog>
          <ChatLog>
            꼬장 운다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 울어도 된다
            </span>
          </ChatLog>
          <ChatLog>
            능욕하러 간다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              후니 둘이 다함 ㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              내가{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              면 뱅 한대 때렸다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              살인 면허 주자 씨바
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key0 "+ (this.state.curr.indexOf(0)>-1 ? 'show': 'hidden')} style={{ background: "#637939" }}>
                ??
              </span>
              / : 뱅 리폿좀
            </span>
          </ChatLog>
          <ChatLog>
            페석대 저러는거 첨본다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              내년에 중국 가겠다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              이건 룰러 판단력이 미친거지{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              잘못은 아닌듯
            </span>
          </ChatLog>
          <ChatLog>
            ㄴㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘붕 롤접는거아니냐?? ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            솔직히 한경기도 못이겼는데 저럴만 하다
          </ChatLog>
          <ChatLog>
            우승조무사 킹레이
          </ChatLog>
          <ChatLog>
            이 이상 어떻게 잘해주냐ㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              뱅
              <span className={"keyword key2 "+ (this.state.curr.indexOf(2)>-1 ? 'show': 'hidden')} style={{ background: "#7b4173" }}>
                ㄹㅇ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key7 "+ (this.state.curr.indexOf(7)>-1 ? 'show': 'hidden')} style={{ background: "#d6616b" }}>
                피넛
              </span>
              은 또 준결승에서...
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              멘탈 나갔네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              그냥 돈이나벌자 중국가자
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 죄가없다 ㅜ
            </span>
          </ChatLog>
          <ChatLog>
            원딜차이였다이건
          </ChatLog>
          <ChatLog>
            상혁아 이제 skt버리자
          </ChatLog>
          <ChatLog>
            기분 개좋겠다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key2 "+ (this.state.curr.indexOf(2)>-1 ? 'show': 'hidden')} style={{ background: "#7b4173" }}>
                ㄹㅇ
              </span>{" "}
              뱅 시방 멘탈 다터르네
            </span>
          </ChatLog>
          <ChatLog>
            인사하러 들어가네 ㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              뱅을 내보내자{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
              ͏ㅠㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            신이 죽었다
          </ChatLog>
          <ChatLog>
            상혁이는 나가있어...
          </ChatLog>
          <ChatLog>
            <span>
              세체원{" "}
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
              `
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 욕하지말자
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>{" "}
              2회 우승 ㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            놀리러왔냐
          </ChatLog>
          <ChatLog>
            SK우승 많이 했잖아 ㅋㅋ
          </ChatLog>
          <ChatLog>
            능욕 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              마지막 룰러 점멸궁때매 자책하는듯 ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            분위기 ㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            약올리러 오죠 ㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            ?
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key13 "+ (this.state.curr.indexOf(13)>-1 ? 'show': 'hidden')} style={{ background: "#8ca252" }}>
                100
              </span>
              인분ㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
              점멸궁 지렸다
            </span>
          </ChatLog>
          <ChatLog>
            능욕하러갔다
          </ChatLog>
          <ChatLog>
            ㅇ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              저러는거 처음봄
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋ 우냐
          </ChatLog>
          <ChatLog>
            와....
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              진짜 빡치겠다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              방생이{" "}
              <span className={"keyword key12 "+ (this.state.curr.indexOf(12)>-1 ? 'show': 'hidden')} style={{ background: "#e7ba52" }}>
                너무
              </span>{" "}
              컸어
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              울지마라
            </span>
          </ChatLog>
          <ChatLog>
            상혁아 수고했다....
          </ChatLog>
          <ChatLog>
            <span>
              상혁아. 떠나자{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>{" "}
              진ㅉ ㅏ드라마 썯사
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ... SKT 나와라...
            </span>
          </ChatLog>
          <ChatLog>
            거의 초상집
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            킹라운 갓비션
          </ChatLog>
          <ChatLog>
            뱅 넌 수영쳐서 와라 그냥
          </ChatLog>
          <ChatLog>
            <span>
              lck 3시드임 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            상혁아 군대가자
          </ChatLog>
          <ChatLog>
            불-편
          </ChatLog>
          <ChatLog>
            <span>
              애초에{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              아니었으면 8강 광탈이었어
            </span>
          </ChatLog>
          <ChatLog>
            초상집
          </ChatLog>
          <ChatLog>
            장례식장
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              진짜{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              저러는거 처음ㅈ보네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              솔직히...원딜차이가{" "}
              <span className={"keyword key12 "+ (this.state.curr.indexOf(12)>-1 ? 'show': 'hidden')} style={{ background: "#e7ba52" }}>
                너무
              </span>{" "}
              심하잖아
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>{" "}
              장애같다 ㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              불쌍하다
            </span>
          </ChatLog>
          <ChatLog>
            넌씨눈
          </ChatLog>
          <ChatLog>
            패자농락하러 가네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              무슨죄냐 ㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            넥서스깨러가내
          </ChatLog>
          <ChatLog>
            엄 숙
          </ChatLog>
          <ChatLog>
            크 악수 ㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            캬
          </ChatLog>
          <ChatLog>
            인사를 하네
          </ChatLog>
          <ChatLog>
            능욕타임 시작
          </ChatLog>
          <ChatLog>
            <span>
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            놀리러 옴
          </ChatLog>
          <ChatLog>
            상혁아 일어나
          </ChatLog>
          <ChatLog>
            야 ...
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              삼성 실화냐 이건
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              야 야 우냐?
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key3 "+ (this.state.curr.indexOf(3)>-1 ? 'show': 'hidden')} style={{ background: "#843c39" }}>
                룰러
              </span>
              가 지리네
            </span>
          </ChatLog>
          <ChatLog>
            빠커 군대나 가자
          </ChatLog>
          <ChatLog>
            간절함의 차이다
          </ChatLog>
          <ChatLog>
            개노잼
          </ChatLog>
          <ChatLog>
            느그넛 느그혁
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우는거 첨본다
            </span>
          </ChatLog>
          <ChatLog>
            스펠 정확히 체크해줘서 앞점멸한거니.. 서폿도 대단
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              혼자서는 안됨
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              짠하다...
            </span>
          </ChatLog>
          <ChatLog>
            부관참시...
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋ
          </ChatLog>
          <ChatLog>
            이것도 인사하냐 ㅈ같네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key5 "+ (this.state.curr.indexOf(5)>-1 ? 'show': 'hidden')} style={{ background: "#de9ed6" }}>
                이거
              </span>{" "}
              리얼 조사해야된다
            </span>
          </ChatLog>
          <ChatLog>
            상혁이 어뜨캄
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              랑 사기자
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              파커{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            상혁이 중국가는거 아니냐
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              일어나질않는다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              밥먹으러가야지
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ..
            </span>
          </ChatLog>
          <ChatLog>
            초상집 방문 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              울죠 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            ㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            결승인데 들어오냐?
          </ChatLog>
          <ChatLog>
            <span>
              ?{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            개빡치나봐...
          </ChatLog>
          <ChatLog>
            초상집 ㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            ㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            vpdlzj bbb
          </ChatLog>
          <ChatLog>
            <span>
              뱅이{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              을렸다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key6 "+ (this.state.curr.indexOf(6)>-1 ? 'show': 'hidden')} style={{ background: "#393b79" }}>
                ㄷㄷ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              ㅋㅋㅋㅋㅋㅋㅋ
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              안일ㅇ너ㅏ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ..
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              느그졷 드르렁 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              빡 .ㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              울어 ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            상혁이
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            어색 ;
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅{" "}
              <span className={"keyword key2 "+ (this.state.curr.indexOf(2)>-1 ? 'show': 'hidden')} style={{ background: "#7b4173" }}>
                ㄹㅇ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            세계최고임을 증명했네
          </ChatLog>
          <ChatLog>
            팀운 ㅈ망겜은 증명됐다
          </ChatLog>
          <ChatLog>
            상혁아...
          </ChatLog>
          <ChatLog>
            능욕타임 스타트
          </ChatLog>
          <ChatLog>
            초상집
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              걍 중국가자 이 노답팀 ㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              향로가{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              를 이겼네 ㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우냐?
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              ㅠㅠ{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            뻘-쭘
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              삼슈네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅍ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              부관참시{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ....
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            갑분싸 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              삐짐
            </span>
          </ChatLog>
          <ChatLog>
            갑분싸
          </ChatLog>
          <ChatLog>
            그냥 지나가
          </ChatLog>
          <ChatLog>
            느 그 혁 도 막판에 못한거 팩트죠?
          </ChatLog>
          <ChatLog>
            못일어나네
          </ChatLog>
          <ChatLog>
            상혁아 인나라
          </ChatLog>
          <ChatLog>
            <span>
              쓰러졌네{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            갑분싸
          </ChatLog>
          <ChatLog>
            빠커가 우는거 첨본다
          </ChatLog>
          <ChatLog>
            상혁아...
          </ChatLog>
          <ChatLog>
            걍지나가라
          </ChatLog>
          <ChatLog>
            <span>
              와
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              운다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              악수는 해야지 ㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              우리{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우네
            </span>
          </ChatLog>
          <ChatLog>
            관짝에 시멘트 부어버리기
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 멘탈..
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            우나봐
          </ChatLog>
          <ChatLog>
            <span>
              갑분싸{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              경기력 최악이지{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              뱅이 두번던져어 진건데
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              오락지고 질질짬 ㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            악수 하띾 뻘쭘 ㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              누가{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              울렸냐
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뗴이귀{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              아이고{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              딥빡
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            중국 이적각이다
          </ChatLog>
          <ChatLog>
            빠커 ㅜㅡ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              아{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            운다 울어
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            악수 거부 ㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            ㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              우리혁{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            매너보소 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우는거 마음아프다
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            운다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            갓이커 ㅜㅜ
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            현피각
          </ChatLog>
          <ChatLog>
            삐카 ㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              빛상혁{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            이번엔 스킨 간지좀 나겠네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              :빠따형 빼따좀빌려줘
            </span>
          </ChatLog>
          <ChatLog>
            ㅍㅍㅍ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            BibleThump BibleThump BibleThump
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              이적하자
            </span>
          </ChatLog>
          <ChatLog>
            그냥 가라
          </ChatLog>
          <ChatLog>
            운다,
          </ChatLog>
          <ChatLog>
            뱅웃는다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              운다...
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              페이커 페이커
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 운다{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              뽝침
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              얼마나 억울하고 화날까{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              상혁이
            </span>
          </ChatLog>
          <ChatLog>
            어떡해..
          </ChatLog>
          <ChatLog>
            <span>
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            우네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              딥빡
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            웃고있엌ㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            와 상혁아 ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              .....
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              아..빠커{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              인성이?
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              운다
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅠ 빛상혁
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              페이커
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              운다 ㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              상혁이{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 운다{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ! 페이커 ! 페이커 !
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            ? 왜 악수 하는데 ?
          </ChatLog>
          <ChatLog>
            뱅 우서?
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 누가 울렸냐{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              빡쳤어
            </span>
          </ChatLog>
          <ChatLog>
            버릇없이 자는거보소 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            아이고..
          </ChatLog>
          <ChatLog>
            센빠이..
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 어떻하냐{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜ 빠커 울어
          </ChatLog>
          <ChatLog>
            야 우냐?
          </ChatLog>
          <ChatLog>
            뻬이까
          </ChatLog>
          <ChatLog>
            뱅 r키 뺐으면.........
          </ChatLog>
          <ChatLog>
            <span>
              운다{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우내 ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              페이커
            </span>
          </ChatLog>
          <ChatLog>
            뱅씨눈
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              진짜{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              개열받지
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              진짜 잘했는데
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 운다{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            뱅 빠따 쳐맞아야됀다
          </ChatLog>
          <ChatLog>
            <span>
              상혁아{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              운다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              무죄
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              콜봐 ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            빼이커
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            몰락 ㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            뱅 그냥 죽자 그 길 밖에 없다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우네 ㅋㅋㅋㅋㅋㅋ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              울자나 뱅친구야
            </span>
          </ChatLog>
          <ChatLog>
            뱅ㅋㅋㅋㅋㅋㅋㅋ 눈치보는거봐 ㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              아이고...{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              는 무슨죄냐
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              빛 상혁{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠ
              </span>
              .ㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              콜해주네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              !
            </span>
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key1 "+ (this.state.curr.indexOf(1)>-1 ? 'show': 'hidden')} style={{ background: "#ad494a" }}>
                엠비션
              </span>{" "}
              멋지다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              중국한가운데서{" "}
              <span className={"keyword key15 "+ (this.state.curr.indexOf(15)>-1 ? 'show': 'hidden')} style={{ background: "#9c9ede" }}>
                삼성
              </span>
              ..
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ..
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              펭키ㅓ
            </span>
          </ChatLog>
          <ChatLog>
            짜이요
          </ChatLog>
          <ChatLog>
            뱅 씨ㅇ발년때매 상혁이 울잖아
          </ChatLog>
          <ChatLog>
            상혁아....
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 운다{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            피이커가 무너졋네
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              응원해주네 ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              우네 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            난감 ...
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            울만했다 빠커
          </ChatLog>
          <ChatLog>
            야 우냐
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              도 우는구나...
            </span>
          </ChatLog>
          <ChatLog>
            뱅웃어? 웃어?
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            아이고....상혁아...
          </ChatLog>
          <ChatLog>
            상혁아... 울지마
          </ChatLog>
          <ChatLog>
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              울지마 ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              혈압 올라서 칠공분혈 각인데
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              우네
            </span>
          </ChatLog>
          <ChatLog>
            ㅠㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            상혁이 ㅜㅜㅜㅜㅜㅜㅠㅜㅜㅠㅜㅠㅜㅠㅜㅠㅜㅠㅜ
          </ChatLog>
          <ChatLog>
            기분이...안 좋아요...
          </ChatLog>
          <ChatLog>
            BibleThump BibleThump BibleThump
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              때이귀{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            상혁이 운다....
          </ChatLog>
          <ChatLog>
            오열하네;;;
          </ChatLog>
          <ChatLog>
            상혁아 울지마라
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              관중들{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              부르네
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠ ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              서럽겠다
            </span>
          </ChatLog>
          <ChatLog>
            뱅 정말 ㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              와{" "}
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              가...........
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              뱅 머리안막고 뭐하냐{" "}
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            준식아...
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              찡하다 ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
              ㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            뱅은 웃는다 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            뱅제발 나가라
          </ChatLog>
          <ChatLog>
            상혁이 얼마나 빡치면 ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            울지마
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key9 "+ (this.state.curr.indexOf(9)>-1 ? 'show': 'hidden')} style={{ background: "#6b6ecf" }}>
                진짜
              </span>{" "}
              우네 ㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            삼 대 떡
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              운다
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              페이커 저런모습 처음본다{" "}
              <span className={"keyword key6 "+ (this.state.curr.indexOf(6)>-1 ? 'show': 'hidden')} style={{ background: "#393b79" }}>
                ㄷㄷ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              상혁이 무죄{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              저러는거 처음봐
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              빠커 운다{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            빠커 운다
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              무죄 판정 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              얼마나 분하면{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            잘하고도 지니 열받지
          </ChatLog>
          <ChatLog>
            뱅 방출해라
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key11 "+ (this.state.curr.indexOf(11)>-1 ? 'show': 'hidden')} style={{ background: "#5254a3" }}>
                페이커
              </span>{" "}
              ㅜㅜㅜ
            </span>
          </ChatLog>
          <ChatLog>
            <span>
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠ
              </span>
            </span>
          </ChatLog>
          <ChatLog>
            센빠이 울지마
          </ChatLog>
          <ChatLog>
            <span>
              아{" "}
              <span className={"keyword key14 "+ (this.state.curr.indexOf(14)>-1 ? 'show': 'hidden')} style={{ background: "#b5cf6b" }}>
                ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
              </span>
            </span>
          </ChatLog>
        </ul>
      </SkewText>
    );
  }
}

export default ChatTransition;
