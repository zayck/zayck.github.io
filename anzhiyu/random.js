var posts=["posts/87140c51.html","posts/aa3cc93.html","posts/ff29d92f.html","posts/fdf868bc.html","posts/eb56646d.html","posts/c95efd89.html","posts/43d41aeb.html","posts/76237bab.html","posts/423f069.html","posts/813365f3.html","posts/cc157a1a.html","posts/f891c7ac.html","posts/86539391.html","posts/791c4fa.html","posts/a6083614.html","posts/95837e44.html","posts/98c2ebf0.html","posts/e5455653.html","posts/9675843e.html","posts/4e22ef83.html","posts/7925bf7d.html","posts/578334c3.html","posts/87ddec21.html","posts/318f7566.html","posts/24cf487f.html","posts/affe5a65.html","posts/60d5c1b.html","posts/1bd197e0.html","posts/6a1c14d0.html","posts/ad704095.html","posts/5fa4fb92.html","posts/740e5bc2.html","posts/6b2eceee.html","posts/1bd488da.html","posts/ab51a098.html","posts/21df4f67.html","posts/95ce247e.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };