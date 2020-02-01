import './style.css';
import detectBrowserLanguage from 'detect-browser-language'

const UPDATES_ENG = 'Status Update:';
const COMPOSITION_ENG = 'Music Composition:';
const MASHUP_ENG = 'Soundclown & YTP:';

const UPDATES_FB_ENG = 'Mainly Chinese/Cantonese.';
const UPDATES_TW_ENG = 'Mainly English.';
const COMPOSITION_YT_ENG = 'Music and music related video.';
const COMPOSITION_SC_ENG = 'My music.';
const COMPOSITION_BC_ENG = 'Buy/Download my music.';
const YTP_SC_ENG = 'Mashup, edits and memes. Active.';
const YTP_YT_ENG = 'YTP, infrequently updated.';

const UPDATES_CHI = '近況更新:';
const COMPOSITION_CHI = '音樂作品:';
const YTP_CHI = '無聊剪接:';

const UPDATES_FB_CHI = '中文/口語為主。';
const UPDATES_TW_CHI = '英文為主。';
const COMPOSITION_YT_CHI = '音樂作品及相關影片。';
const COMPOSITION_SC_CHI = '音樂作品。';
const COMPOSITION_BC_CHI = '購買或下載我的音樂。';
const YTP_SC_CHI = '音樂混搭、修改及聲音迷因，無聊剪接類作品主要在此更新。';
const YTP_YT_CHI = '無聊剪接影片，不頻密更新。';

//row doms
let updatesRowP = document.getElementById('updates-row-p');
let updatesFB = document.getElementById('updates-fb');
let updatesTW = document.getElementById('updates-tw');
let compositionRowP = document.getElementById('composition-row-p');
let compositionYT = document.getElementById('composition-yt');
let compositionSC = document.getElementById('composition-sc');
let compositionBC = document.getElementById('composition-bc');
let ytpRowP = document.getElementById('ytp-row-p');
let ytpSC = document.getElementById('ytp-sc');
let ytpYT = document.getElementById('ytp-yt');


class DOMHelper {
  static itemsToChange(item, string, originRowString, row) {
    item.onmouseover = () => {
      mouseOver();
    };
    item.onmouseout = () => {
      mouseOut();
    };

    function mouseOver() {
      row.textContent = string;
    }
    function mouseOut() {
      row.textContent = originRowString;
    }
  }
  static ChiInit(row,chi){
    row.textContent = chi
  }
  static App() {
    if(detectBrowserLanguage() !== "zh-CN"
    && detectBrowserLanguage() !== "zh-TW"){
        DOMHelper.itemsToChange(updatesFB, UPDATES_FB_ENG, UPDATES_ENG, updatesRowP);
        DOMHelper.itemsToChange(updatesTW, UPDATES_TW_ENG, UPDATES_ENG, updatesRowP);
        DOMHelper.itemsToChange(compositionYT, COMPOSITION_YT_ENG, COMPOSITION_ENG, compositionRowP);
        DOMHelper.itemsToChange(compositionSC, COMPOSITION_SC_ENG, COMPOSITION_ENG, compositionRowP);
        DOMHelper.itemsToChange(compositionBC, COMPOSITION_BC_ENG, COMPOSITION_ENG, compositionRowP);
        DOMHelper.itemsToChange(ytpSC, YTP_SC_ENG, MASHUP_ENG, ytpRowP);
        DOMHelper.itemsToChange(ytpYT, YTP_YT_ENG, MASHUP_ENG, ytpRowP);
        console.log('1');
        
    }else{
        DOMHelper.ChiInit(updatesRowP, UPDATES_CHI)
        DOMHelper.ChiInit(compositionRowP, COMPOSITION_CHI)
        DOMHelper.ChiInit(ytpRowP, YTP_CHI)
        DOMHelper.itemsToChange(updatesFB, UPDATES_FB_CHI, UPDATES_CHI, updatesRowP);
        DOMHelper.itemsToChange(updatesTW, UPDATES_TW_CHI, UPDATES_CHI, updatesRowP);
        DOMHelper.itemsToChange(compositionYT, COMPOSITION_YT_CHI, COMPOSITION_CHI, compositionRowP);
        DOMHelper.itemsToChange(compositionSC, COMPOSITION_SC_CHI, COMPOSITION_CHI, compositionRowP);
        DOMHelper.itemsToChange(compositionBC, COMPOSITION_BC_CHI, COMPOSITION_CHI, compositionRowP);
        DOMHelper.itemsToChange(ytpSC, YTP_SC_CHI, YTP_CHI, ytpRowP);
        DOMHelper.itemsToChange(ytpYT, YTP_YT_CHI, YTP_CHI, ytpRowP);
        console.log();
        
    }

  }
}
DOMHelper.App();

console.log(detectBrowserLanguage());
