(this["webpackJsonpreact-form"]=this["webpackJsonpreact-form"]||[]).push([[0],{19:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(13),r=n.n(i),s=(n(19),n(3)),o=n(14),j=n.n(o),l=(n(38),n(0)),m=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:" Find yourself a movie "})})},d=(n(40),n(41),function(e){return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsxs)("h3",{children:[" ",e.title," "]}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:"Movie poster",src:e.poster})}),Object(l.jsxs)("p",{children:[" (",e.year,") "]})]})}),u=function(e){return Object(l.jsxs)("div",{className:"movieList",children:[Object(l.jsx)("h2",{children:" Movies "}),Object(l.jsx)("div",{className:"movies",children:e.movies.map((function(e){return Object(l.jsx)(d,{title:e.Title,year:e.Year,poster:e.Poster},e.imdbID)}))})]})},h=(n(42),function(e){return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{type:"search",name:"search",value:e.searchingValue,placeholder:"Enter title of movies",onChange:e.handlerSearchingValue}),Object(l.jsx)("button",{onClick:e.getSearchingValue,children:" Search "})]})}),b=n.p+"static/media/preloader.cf3a4a26.gif",p=(n(43),function(){return Object(l.jsx)("div",{className:"preloader",children:Object(l.jsx)("img",{alt:"preloader",src:b})})}),M=(n(44),[{Title:"Iron Man",Year:"2008",imdbID:"tt0371746",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"},{Title:"Iron Man 3",Year:"2013",imdbID:"tt1300854",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"},{Title:"Iron Man 2",Year:"2010",imdbID:"tt1228705",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"},{Title:"Tetsuo: The Iron Man",Year:"1989",imdbID:"tt0096251",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BODYxZTIwMWQtZTdiMS00ODRmLThlODEtNjkwNmE1ZTY1ZjM1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"}]),O=function(){var e=Object(c.useState)(M),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),r=Object(s.a)(i,2),o=r[0],d=r[1],b=Object(c.useState)(""),O=Object(s.a)(b,2),g=O[0],f=O[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(m,{}),Object(l.jsx)(h,{searchingValue:g,handlerSearchingValue:function(e){return f(e.target.value)},getSearchingValue:function(){d(!0),j.a.get("https://www.omdbapi.com/?s=".concat(g.split(" ").join("+"),"&apikey=4a3b711b")).then((function(e){"True"===e.data.Response?a(e.data.Search):alert(e.data.Error),d(!1)}))}}),o?Object(l.jsx)(p,{}):Object(l.jsx)(u,{movies:n})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.e3da64d5.chunk.js.map