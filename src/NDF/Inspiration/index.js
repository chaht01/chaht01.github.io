import React from "react";

import loading_bg from "./img/loading_bg.png";
import checklist from "./img/checklist.png";

import trexMp4 from "./img/Trex.mp4";

import fbLikeMp4 from "./img/balloon.mp4";
import pwa from "./img/pwa.gif";
import pwa_member from "./img/pwa_member.gif";
import questions from "./img/questions.gif";
import questions_bg from "./img/questions_bg.png";

import genre_bg from "./img/genre_bg.png";
import genres from "./img/genres.png";
import toobar from "./img/toobar.png";
import jamm from "./img/jamm.png";

import congratulation from "./img/congrat.png";
import textInc from "./img/font_increasing.png";

const Ideation = () => {
  const style = {
    loading_bg: {
      background: `url(${loading_bg})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 50%"
    },
    pwa: {
      marginTop: "-13vw"
    },
    questionBg: {
      marginTop: "1vw"
    },
    postlist: {
      left: "-12vw",
      flexWrap: "nowrap"
    },
    post: {
      marginLeft: "1.25vw"
    },
    fbLike: {
      marginTop: "-2.5vw"
    },
    textInc: {
      opacity: 0.3
    }
  };
  return (
    <div>
      {/* inspirations */}
      <div>
        <div className="row">
          <div className="col-xs-12">
            <div className="ratio--4-1" />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs">
            <div className="section__title">Inspiration</div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-16 col-sm-12 col-md-12">
            <div className="section__description">
              It is important to obtain inspirations from daily experiences and
              observe the obstacle from different perspective in order to
              overcome weekly design problems effectively. For ten weeks, I
              strived to utilize my inspirations gained from design concept,
              gesture or context directly or indirectly.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="ratio--4-1" />
          </div>
        </div>
      </div>
      <div className="row" style={style.loading_bg}>
        <div className="col-xs">
          <div className="row">
            <div className="col-xs-10 col-sm-9 col-xs-offset-2 col-sm-offset-3">
              <div className="TRex">
                <div className="ratio__inner Trex__bg" />
                <div className="ratio__inner">
                  <video
                    className="ratio__img"
                    autoPlay
                    playsInline=""
                    muted=""
                    loop
                    poster=""
                  >
                    <source type="video/mp4" src={trexMp4} />
                  </video>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-xs-offset-3 col-md-offset-4">
              <img className="ratio__img" src={checklist} />
            </div>
          </div>

          <div className="row" style={style.pwa}>
            <div className="col-xs-6 col-md-6 col-xs-offset-14 col-md-offset-14">
              <div className="pwa">
                <div className="ratio__inner ratio__inner--overflow">
                  <img className="ratio__img" src={pwa_member} />
                  <img className="ratio__img" src={pwa} />
                </div>
                <div className="ratio__inner pwa__guide" />
              </div>
            </div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-7 col-md-7 col-xs-offset-3 col-md-offset-4">
              <div className="questions">
                <div className="ratio__inner" style={style.questionBg}>
                  <img className="ratio__img" src={questions_bg} />
                </div>
                <div className="ratio__inner">
                  <img className="ratio__img" src={questions} />
                </div>
              </div>
            </div>
            <div className="col-xs-10 col-sm-8 col-md-8 col-xs-offset-2 col-md-offset-2">
              <div className="block-hide block-show-max-sm">
                <div className="ratio--4-1">
                  <div className="ratio__inner" />
                </div>
              </div>
              <div className="article__paragraph align--justify">
                What will be the role of portal site (Naver) during an incident
                of unstable network environment? From the result of the survey
                of 199 people and experience of playing T-rex game in google
                Chrome and attending PWA roadshow as a staff member, I thought
                about how to improve users’ experiences especially while
                internet service quality is unstable.
              </div>
            </div>
          </div>
          <div className="ratio--4-1" />
        </div>
      </div>

      <div className="row">
        <div className="cos-xs-24 col-md-24">
          <div className="ratio__inner">
            <img className="ratio__img" src={genre_bg} alt="" />
          </div>
          <div className="row middle-xs">
            <div className="col-xs-8 col-md-8 col-xs-offset-3 col-md-offset-3">
              <img className="ratio__img" src={genres} alt="" />
            </div>
            <div className="col-xs-9 col-sm-8 col-xs-offset-2 col-sm-offset-2">
              <div className="ratio--4-1">
                <div className="ratio__inner" />
              </div>
              <div className="article__paragraph align--justify">
                When can we be contented with music service quality? Why should
                we know our favorite category of genre, songs, and artist? There
                are too many sub-genre (1378) and songs (600k) to know
                ourselves’ taste. Even in Korea, many people do not fully
                understand their music taste as they only listen to music from
                “popular music” chart.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-md-10 col-xs-offset-2 col-md-offset-2">
              <div className="ratio--4-1" />
              <div className="article__paragraph align--justify">
                Although there has been a great improvements in music service
                through introduction and development of Artificial-Intelligence,
                AI does not effectively find the music that I like.It is
                disappointing that the service often provides unsuitable or not
                tailored playlists for a user. In my opinion, the process of
                making playlists is arbitrary and the range of their meaning can
                vary from too abstract to too specific. Additionally, nested and
                hierarchical structure of music service confuse users by their
                ineffective navigative flow.
              </div>
              <div className="block-hide block-show-max-sm">
                <div className="ratio--4-1" />
              </div>
            </div>
            <div className="col-xs-8 col-md-8 col-xs-offset-2 col-md-offset-2">
              <div className="block-hide block-show-max-sm">
                <div className="ratio--3-1" />
              </div>
              <img className="ratio__img shadow" src={jamm} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-20 col-sm-10 col-md-10 col-xs-offset-2 col-md-offset-2">
              <img className="ratio__img" src={toobar} alt="" />
            </div>
          </div>
        </div>
        <div className="ratio--4-1" />
      </div>

      <div className="row middle-xs" style={style.postlist}>
        {[1, 2, 3, 4, 5].map(i => {
          if (i != 2) {
            return (
              <div className="col-xs-6 col-md-6" key={i} style={style.post}>
                <div className="post--dummy">
                  <div className="ratio__inner">
                    <div className="row middle-xs center-xs post--dummy__inner">
                      <div className="lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="col-xs-11 col-md-11" key={i} style={style.post}>
                <img className="ratio__img" src={congratulation} alt="" />
              </div>
            );
          }
        })}
      </div>

      <div className="row middle-xs">
        <div className="col-xs-10 col-md-10 col-xs-offset-4 col-md-offset-4">
          <div className="text-increasing">
            <div className="ratio__inner">
              <img className="ratio__img" style={style.textInc} src={textInc} />
            </div>
            <div className="block-hide-max-sm">
              <div className="ratio__inner row middle-xs">
                <div className="col-xs-22 col-md-22 col-xs-offset-1 col-md-offset-1">
                  <div className="article__paragraph">
                    Many fans wants to communicate with their celebrities by
                    their comments/words to be seen and read through global live
                    chatting service. If a user wants to express his/her message
                    more “unique”, how can the message be “unique” in the same
                    functions in the service for everyone? I found clues from
                    ‘special post’ and ‘like’ button from Facebook.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5" style={style.fbLike}>
          <div className="fb-like shadow-5">
            <div className="ratio__inner">
              <video
                className="ratio__img"
                autoPlay
                playsInline=""
                muted=""
                loop
                poster=""
              >
                <source type="video/mp4" src={fbLikeMp4} />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="block-hide block-show-max-sm">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="ratio--4-1" />
          </div>
          <div className="col-xs-20">
            <div className="article__paragraph">
              Many fans wants to communicate with their celebrities by their
              comments/words to be seen and read through global live chatting
              service. If a user wants to express his/her message more “unique”,
              how can the message be “unique” in the same functions in the
              service for everyone? I found clues from ‘special post’ and ‘like’
              button from Facebook.
            </div>
          </div>
        </div>
      </div>
      <div className="ratio--4-1" />
    </div>
  );
};

export default Ideation;
