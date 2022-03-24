// const firstTemplate = document.createElement("template");
// firstTemplate.innerHTML = `
// <head>
//     <meta
//             charset="UTF-8"
//             name="viewport"
//             content="width=device-width, initial-scale=1"
//     />
// <link
//       href="https://fonts.googleapis.com/icon?family=Material+Icons"
//       rel="stylesheet"
//     />
//     <link
//       href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
//       rel="stylesheet"
//     /><title></title>
// </head>
// <style>
// .hidden-section {
// display: none;
// }
// .visible-section {
// display: block;
// height: 100px;
// width: 100px;
// background: yellow;
// }
//     * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//       font-family: Rubik,serif;
//     }
//     .section {
//       height: 100%;
//     }
//     .container {
//       padding: 0 10%;
//     }
//     img {
//       width: 100%;
//     }
//     #first {
//       display: grid;
//       grid-template-columns: auto 1fr;
//       background-image: url("https://i.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o");
//       min-height: 100vh;
//       width: 100%;
//     }
//
//     #first-section-menu {
//       display: block;
//       background: #0055a5;
//       width: 100px;
//       min-height: 100vh;
//       padding-top: 2rem;
//     }
//     /*.first-section-menu-mobile {*/
//     /*    display: none;*/
//     /*}*/
//     /*.first-section-menu-desktop {*/
//
//     /*}*/
//     .menu-icons {
//       padding-top: 3rem;
//       display: grid;
//       grid-template-columns: 1fr;
//       align-items: center;
//       justify-content: center;
//       grid-gap: 3vh;
//     }
//     .nav {
//       grid-gap: 25px;
//       background: transparent;
//       border: 1px solid #B5B5B5;
//       cursor: pointer;
//       padding: 16px 22px;
//       margin: auto;
//       border-radius: 4px;
//     }
//     .nav:hover {
//       border: 1px solid cornflowerblue;
//     }
//     .nav.active {
//       background: #FEF229;
//       color: #000000;
//     }
//     .material-icons,
//     .material-icons-outlined {
//       color: #C9C9C9;
//       display: grid;
//       align-items: center;
//       justify-content: center;
//       align-self: center;
//     }
//     .icon-border {
//       width: auto;
//       margin: auto;
//     }
//     .open-menu {
//       font-size: 4rem;
//       color: #FFFFFF;
//     }
//     #first-section-main {
//       display: grid;
//       grid-template-rows: 1fr 5fr 1fr;
//       width: 100%;
//     }
//     .first-section-main-header {
//       display: grid;
//       grid-template-columns: auto 1fr;
//       justify-items: end;
//       align-items: center;
//     }
//     .phone {
//       height: 50px;
//       width: 27%;
//       border: 1px solid #C9C9C9;
//       display: grid;
//       grid-template-columns: 1fr 3fr;
//       text-align: left;
//       align-items: center;
//       border-radius: 34px;
//     }
//     .call {
//       background: #0055A5;
//       color: #ffffff;
//       border: 1px solid #707070;
//       border-radius: 50%;
//       /*height: 100%;*/
//       width: 49px;
//       height: 49px;
//     }
//     .phone > span:last-child {
//       font-size: 22px;
//       line-height: 27px;
//       color: #000000;
//     }
//     .first-section-main-mid {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       justify-content: space-evenly;
//       align-items: center;
//       grid-gap: 3em;
//     }
//     .first-section-main-mid-left {
//       display: grid;
//       grid-template-rows: auto 1fr;
//       align-items: center;
//       justify-content: start;
//     }
//     .section1-location {
//       color: #000000;
//       font-size: 3rem;
//     }
//     .location-hr {
//       display: grid;
//       grid-template-columns: auto 1fr;
//       align-items: center;
//     }
//     .dotted {
//       border: 1px dotted #535353;
//       opacity: 93%;
//       gap: 5px;
//     }
//     .section1-address {
//       font-size: 52px;
//       line-height: 73px;
//       font-weight: bold;
//       color: #2e2b2b;
//       text-align: left;
//     }
//     .first-section-main-mid-right {
//       display: grid;
//       background-color: #FEF229;
//       align-items: center;
//       justify-self: center;
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: 1fr 1fr;
//       border-radius: 11px;
//       height: 80%;
//       width: 100%;
//       padding: 1em;
//     }
//     .card {
//       display: block;
//       align-content: end;
//       text-align: center;
//       height: 100%;
//       width: 100%;
//     }
//     .card-head {
//       color: #2E2B2B;
//       font-size: 2rem;
//       margin-top: 1em;
//     }
//     .card-main {
//       font-size: 19px;
//       line-height: 18px;
//       margin-top: 1rem;
//     }
//     .card-footer {
//       font-size: 28px;
//       line-height: 22px;
//     }
//     .card-top-left {
//       border-right: 1px dashed #707070;
//       border-bottom: 1px dashed #707070;
//     }
//     .vl {
//       height: 100%;
//       border: 1px dotted #707070;
//     }
//     .hr {
//       width: 100%;
//       border: 1px dotted #707070;
//       font-size: 0;
//     }
//     .card-top-right {
//       background: #0055A5;
//       border-radius: 4px;
//       margin: 0 0 4em 2em;
//     }
//     .card-bottom-right {
//       border-top: 1px dashed #707070;
//     }
//     .card-bottom-left {
//       border-right: 1px dashed #707070;
//     }
//     .see-details {
//       cursor: pointer;
//       justify-self: start;
//       align-self: center;
//       display: grid;
//       justify-content: center;
//     }
//     .see-details > span:first-child {
//       font-size: 16px;
//       line-height: 15px;
//       color: #000000;
//     }
//     .see-details > span:last-child {
//       color: #2E2B2B;
//       width: auto;
//     }
//   </style>
// <body>
//       <section id="first" class="section">
//         <div id="first-section-menu">
//           <span class="material-icons open-menu">play_circle</span>
//           <div class="menu-icons">
//             <div class="icon-border">
//               <span class="material-icons nav active">home</span>
//             </div>
//             <span class="material-icons nav">home</span>
//             <span class="material-icons nav">home</span>
//             <span class="material-icons nav">home</span>
//             <span class="material-icons nav">home</span>
//             <span class="material-icons nav">home</span>
//             <span class="material-icons nav">home</span>
//           </div>
//         </div>
//         <div id="first-section-main" class="container">
//           <div class="first-section-main-header">
//             <div></div>
//             <div class="phone">
//               <span class="material-icons call">call</span>
//               <span>020 8558 9900</span>
//             </div>
//           </div>
//           <div class="first-section-main-mid">
//             <div class="first-section-main-mid-left">
//               <div class="location-hr">
//                 <span class="material-icons-outlined section1-location">
//                   location_on
//                 </span>
//                 <div>
//                   <hr class="dotted" style="width: 80%"/>
//                 </div>
//               </div>
//               <p class="section1-address">
//                 Market Appraisal for 32, Malmesbury Road, South Woodford, by
//                 Lifesycle
//               </p>
//             </div>
//             <div class="first-section-main-mid-right">
//
//
//                 <div class="card card-top-left" style="padding-top: 3rem">
//                   <span class="material-icons-outlined card-head"
//                     >event_available</span
//                   >
//                       <p class="card-main" style="margin-bottom: 1em; font-size: 16px; line-height: 15px">Valuation Date</p>
//                       <p class="card-footer">24 June 2019</p>
//                 </div>
//                 <div class="card card-top-right">
//                   <span
//                     class="material-icons card-head"
//                     style="color: #ffffff !important"
//                     >hotel</span
//                   >
//                     <p class="card-main" style="color: #FFFFFF">Bedrooms</p><br>
//                     <p class="card-footer" style="font-size: 28px; line-height: 16px; color: #FFFFFF">2</p>
//                 </div>
//                 <div class="card card-bottom-left">
//                   <span class="material-icons card-head" style="margin-top: 1em">chair</span>
//                     <p class="card-main">Receptions</p><br>
//                     <p class="card-footer">1</p>
//                 </div>
//                 <div class="card card-bottom-right">
//                   <span class="material-icons card-head" style="margin-top: 1em">bathtub</span>
//                     <p class="card-main">Bathrooms</p><br>
//                     <p class="card-footer">3</p>
//                 </div>
//             </div>
//           </div>
//           <div class="see-details">
//             <span class="see-details-text">See Details</span>
//             <span class="material-icons-outlined">expand_more</span>
//           </div>
//         </div>
//       </section>
//       <div class="section hidden-section">asndlaksmd</div>
//       <div class="section hidden-section">asndlaksmd</div>
//       <div class="section hidden-section">asndlaksmd</div>
//       <div class="section hidden-section">asndlaksmd</div>
//       <div class="section hidden-section">asndlaksmd</div>
//       <div class="section hidden-section">asndlaksmd</div>
//     `;
// class Section1 extends HTMLElement {
//   constructor() {
//     super();
//     this.isVisible = false;
//     this.isDetail = false;
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(firstTemplate.content.cloneNode(true));
//   }
//   seeDetails() {
//     this.isDetail = !this.isDetail;
//     if (this.isDetail) {
//       console.log("if");
//       this.shadowRoot
//         .querySelectorAll(".section.hidden-section")
//         .forEach((section) => {
//           section.setAttribute("class", "section visible-section");
//         });
//     } else {
//       console.log("else");
//       this.shadowRoot
//         .querySelectorAll(".section.visible-section")
//         .forEach((section) => {
//           section.setAttribute("class", "section hidden-section");
//         });
//     }
//   }
//   readMore() {
//     this.isVisible = !this.isVisible;
//     if (!this.isVisible) {
//       this.shadowRoot
//         .querySelector("#content")
//         .setAttribute("class", "visible-content");
//     } else {
//       this.shadowRoot
//         .querySelector("#content")
//         .setAttribute("class", "hidden-content");
//     }
//   }
//   ChangeScreen() {
//     if (this.shadowRoot.window.width < 600) {
//       console.log("s" + window.visualViewport.width);
//     } else {
//       console.log("l" + window.visualViewport.width);
//     }
//     this.shadowRoot
//       .querySelector("#first-section-menu")
//       .setAttribute(
//         "style",
//         window.innerWidth < 600 ? "display: none" : "display: block"
//       );
//   }
//   changeSize() {
//     const names = ["price", "link", "pdf"];
//     for (let i = 0; i < names.length; i++) {
//       this.shadowRoot
//         .querySelector(`#${names[i]}`)
//         .setAttribute("name", window.innerWidth < 600 ? names[i] : "");
//     }
//   }
//   connectedCallback() {
//     // this.shadowRoot
//     //   .querySelector("#read-more")
//     //   .addEventListener("click", () => this.readMore());
//     this.shadowRoot
//       .querySelector(".section")
//       .addEventListener("click", () => this.seeDetails());
//     window.addEventListener("load", () => this.ChangeScreen());
//   }
// }
// window.customElements.define("section-1", Section1);

const section1 = function (root) {
  document.body.style += `.hidden-section {
display: none;
}
.visible-section {
display: block;
height: 100px;
width: 100px;
background: yellow;
}
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Rubik,serif;
    }
    .section {
      height: 100%;
    }
    .container {
      padding: 0 10%;
    }
    img {
      width: 100%;
    }
    #first {
      display: grid;
      grid-template-columns: auto 1fr;
      background-image: url("https://i.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o");
      min-height: 100vh;
      width: 100%;
    }

    #first-section-menu {
      display: block;
      background: #0055a5;
      width: 100px;
      min-height: 100vh;
      padding-top: 2rem;
    }
    /*.first-section-menu-mobile {*/
    /*    display: none;*/
    /*}*/
    /*.first-section-menu-desktop {*/
       
    /*}*/
    .menu-icons {
      padding-top: 3rem;
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      grid-gap: 3vh;
    }
    .nav {
      grid-gap: 25px;
      background: transparent;
      border: 1px solid #B5B5B5;
      cursor: pointer;
      padding: 16px 22px;
      margin: auto;
      border-radius: 4px;
    }
    .nav:hover {
      border: 1px solid cornflowerblue;
    }
    .nav.active {
      background: #FEF229;
      color: #000000;
    }
    .material-icons,
    .material-icons-outlined {
      color: #C9C9C9;
      display: grid;
      align-items: center;
      justify-content: center;
      align-self: center;
    }
    .icon-border {
      width: auto;
      margin: auto;
    }
    .open-menu {
      font-size: 4rem;
      color: #FFFFFF;
    }
    #first-section-main {
      display: grid;
      grid-template-rows: 1fr 5fr 1fr;
      width: 100%;
    }
    .first-section-main-header {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-items: end;
      align-items: center;
    }
    .phone {
      height: 50px;
      width: 27%;
      border: 1px solid #C9C9C9;
      display: grid;
      grid-template-columns: 1fr 3fr;
      text-align: left;
      align-items: center;
      border-radius: 34px;
    }
    .call {
      background: #0055A5;
      color: #ffffff;
      border: 1px solid #707070;
      border-radius: 50%;
      /*height: 100%;*/
      width: 49px;
      height: 49px;
    }
    .phone > span:last-child {
      font-size: 22px;
      line-height: 27px;
      color: #000000;
    }
    .first-section-main-mid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-evenly;
      align-items: center;
      grid-gap: 3em;
    }
    .first-section-main-mid-left {
      display: grid;
      grid-template-rows: auto 1fr;
      align-items: center;
      justify-content: start;
    }
    .section1-location {
      color: #000000;
      font-size: 3rem;
    }
    .location-hr {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
    .dotted {
      border: 1px dotted #535353;
      opacity: 93%;
      gap: 5px;
    }
    .section1-address {
      font-size: 52px;
      line-height: 73px;
      font-weight: bold;
      color: #2e2b2b;
      text-align: left;
    }
    .first-section-main-mid-right {
      display: grid;
      background-color: #FEF229;
      align-items: center;
      justify-self: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      border-radius: 11px;
      height: 80%;
      width: 100%;
      padding: 1em;
    }
    .card {
      display: block;
      align-content: end;
      text-align: center;
      height: 100%;
      width: 100%;
    }
    .card-head {
      color: #2E2B2B;
      font-size: 2rem;
      margin-top: 1em;
    }
    .card-main {
      font-size: 19px;
      line-height: 18px;
      margin-top: 1rem;
    }
    .card-footer {
      font-size: 28px;
      line-height: 22px;
    }
    .card-top-left {
      border-right: 1px dashed #707070;
      border-bottom: 1px dashed #707070;
    }
    .vl {
      height: 100%;
      border: 1px dotted #707070;
    }
    .hr {
      width: 100%;
      border: 1px dotted #707070;
      font-size: 0;
    }
    .card-top-right {
      background: #0055A5;
      border-radius: 4px;
      margin: 0 0 4em 2em;
    }
    .card-bottom-right {
      border-top: 1px dashed #707070;
    }
    .card-bottom-left {
      border-right: 1px dashed #707070;
    }
    .see-details {
      cursor: pointer;
      justify-self: start;
      align-self: center;
      display: grid;
      justify-content: center;
    }
    .see-details > span:first-child {
      font-size: 16px;
      line-height: 15px;
      color: #000000;
    }
    .see-details > span:last-child {
      color: #2E2B2B;
      width: auto;
    }`;
  // const mydiv = createElement(
  //   "section",
  //   "firsts",
  //   "section",
  //   "background: yellow; height: 100px; width: 100px"
  // );
  return (document.querySelector(root).innerHTML += `
${createElement(
  "section",
  "firsts",
  "section",
  "background: yellow; height: 100px; width: 100px"
)}
      <section id="first" class="section">
        <div id="first-section-menu">
          <span class="material-icons open-menu">play_circle</span>
          <div class="menu-icons">
            <div class="icon-border">
              <span class="material-icons nav active">home</span>
            </div>
            <span class="material-icons nav">home</span>
            <span class="material-icons nav">home</span>
            <span class="material-icons nav">home</span>
            <span class="material-icons nav">home</span>
            <span class="material-icons nav">home</span>
            <span class="material-icons nav">home</span>
          </div>
        </div>
        <div id="first-section-main" class="container">
          <div class="first-section-main-header">
            <div></div>
            <div class="phone">
              <span class="material-icons call">call</span>
              <span>020 8558 9900</span>
            </div>
          </div>
          <div class="first-section-main-mid">
            <div class="first-section-main-mid-left">
              <div class="location-hr">
                <span class="material-icons-outlined section1-location">
                  location_on
                </span>
                <div>
                  <hr class="dotted" style="width: 80%"/>
                </div>
              </div>
              <p class="section1-address">
                Market Appraisal for 32, Malmesbury Road, South Woodford, by
                Lifesycle
              </p>
            </div>
            <div class="first-section-main-mid-right">


                <div class="card card-top-left" style="padding-top: 3rem">
                  <span class="material-icons-outlined card-head"
                    >event_available</span
                  >
                      <p class="card-main" style="margin-bottom: 1em; font-size: 16px; line-height: 15px">Valuation Date</p>
                      <p class="card-footer">24 June 2019</p>
                </div>
                <div class="card card-top-right">
                  <span
                    class="material-icons card-head"
                    style="color: #ffffff !important"
                    >hotel</span
                  >
                    <p class="card-main" style="color: #FFFFFF">Bedrooms</p><br>
                    <p class="card-footer" style="font-size: 28px; line-height: 16px; color: #FFFFFF">2</p>
                </div>
                <div class="card card-bottom-left">
                  <span class="material-icons card-head" style="margin-top: 1em">chair</span>
                    <p class="card-main">Receptions</p><br>
                    <p class="card-footer">1</p>
                </div>
                <div class="card card-bottom-right">
                  <span class="material-icons card-head" style="margin-top: 1em">bathtub</span>
                    <p class="card-main">Bathrooms</p><br>
                    <p class="card-footer">3</p>
                </div>
            </div>
          </div>
          <div class="see-details">
            <span class="see-details-text">See Details</span>
            <span class="material-icons-outlined">expand_more</span>
          </div>
        </div>
      </section>
      <div class="section hidden-section">asndlaksmd</div>
      <div class="section hidden-section">asndlaksmd</div>
      <div class="section hidden-section">asndlaksmd</div>
      <div class="section hidden-section">asndlaksmd</div>
      <div class="section hidden-section">asndlaksmd</div>
      <div class="section hidden-section">asndlaksmd</div>
    `);
};

const createElement = (_tag, _id, _class, _cssText) => {
  let tag = document.createElement(_tag);
  tag.id = _id;
  tag.className = _class;
  tag.style.cssText = _cssText;
  return tag.outerHTML;
};
// const addCsstext = (elementSelector, _cssText) => {
//   const element = document.querySelector(elementSelector)
//   const
// }
