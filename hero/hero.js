(function(){
  var F='./logos/';
  /* every logo below is a real integration pulled from makini.io/integrations */
  var APPS=[
    [F+'65b26b2169991ad63e3b1c63_nnpjexPCXrQqSYSd_Lvnb862z3T_SWirZSZm_HAJwog.webp','Corrigo'],
    [F+'65b26cb52ba11f3ccf5e489f_2k6A2xb3D0yt6mtZirTsy1ElTnq9QdinCxZd8l2Z9t8.webp','Odoo'],
    [F+'65b26ed0c43d885b24ff1b01_-Br-lFjMWTHXHdFEN4XgL3nha1imjZ_UBOCLTMpSuH8.webp','ABS'],
    [F+'65b3a8373d3ea3723f5477ee_f7Vgz5UfBJ0l9dc5VDQm-BGe6Al4R1GEis4GEmOMeCM.webp','Blue Yonder'],
    [F+'65b3a8407eeb714964709b5e_bf5YQBmE6UavajB6x3_310RffXOQPd8-lgzZvNQJgGY.webp','SnapFulfil'],
    [F+'65b3a86f279eef575e830441_MVOf1kpcs7RklUUlhNfK_G_Zq4p6SvGLEij3MAH8c48.webp','Dynamics 365 BC'],
    [F+'65b3a8737eeb71496470c0ee_4hsymuc_4lvhEUiqsYOI27XXce5ovFRQQi8394SlnXU.webp','JD Edwards'],
    [F+'65b3a878279eef575e8309de_q_zoLxHFVkB_nzVUz1hfmNtR_lrd6Tb38QkitKZoCgI.webp','Brightpearl'],
    [F+'65b3a88ee56fbacf3e6e9e01_q-K1NCFWw5dWAj9NTGeK9EkFBK6-AFALDfOjKejW9O8.webp','SAP'],
    [F+'65b3a890f3cf8b7eb8705282_P2Ta9FkyW3ERfEnfQq4pKtiLMQwsyBB-Ovv5Ig19CII.webp','IBM Maximo'],
    [F+'65b3a98cf23bf6ade35f08f1_g_dvDq757tSknCXgmkPO8m4yCnzqy_N1KMJm18dDf-w.webp','SpecTec'],
    [F+'65b3a991c7aa90faa154eb44_mz7JYoURz2RmWb-LQNSmOzGWP8jr-6SQRCQrYstpSls.webp','ServiceChannel'],
    [F+'65b3a9eb9fea3d2b46d28267_BBin_Xl6U-Tt-qx1EUY1HG_vccNbmfbRlsXGmXbv90I.webp','Oracle'],
    [F+'65b3a9ee2dc41c223581f640_SklO3WmiP0EKD3Sf0CK9TgNNyC98ITky26JQSUrfV-U.webp','Plex'],
    [F+'65df1f917673a4b7f32026ba_XNeV7g9OsrXOcmcaXdWVK91RE8jjm7SEIGJIBrSWSZQ.webp','Hexagon'],
    [F+'65df21b978b2f2bacd85f040_rqkWcsO4zS1C34URU2opBSSEnlisapEZpH3ctj0ONMo.webp','Infor'],
    [F+'66447113a531ec39cfec4b5d_Group 34543 (1).webp','Tractian'],
    [F+'670809af15766f012970a16d_IXGiyYmixbMlcyKECKiBAxaPnYk6D3Y5agKHkUd4zJw.webp','Korber'],
    [F+'670e44b8dfe5424f2370a4d6_6AxRRrkjTNtiGVJJ4GZ3HGvhnaRtQZYiI_pVJ1n_m5E.webp','Fishbowl'],
    [F+'6a3449dfbe9cc4d57ad3d5bf_KxYCx-NLl_bGfq5sbMaLOQz1SiX2kH5xw5QiwxUT0iM.webp','Aptean'],
    [F+'6a3449ea43ddc0d899f0d162_1vbs2mm_OC4ySwdCmRzB72P0EQun0RMV_YqYUW4Ah30.webp','Beeline'],
    [F+'6a3449f8d876cbff778d62c0_fsXSDkdyH44d62YAc9LcdsQysLmpgahZeaVVTtDyoIQ.webp','Oracle NetSuite'],
    [F+'6a3449fbeb2bc4a635519b19_W2YHuYGegkzrdycFiGV9gV9skuCr_OFIOg5pa235Qiw.webp','Sage'],
    [F+'6a344a03f0532e266e4357e3_ecfirSz62xpI3_HOzn0KdRFsq_-ba7cj3mJW9HYMx38.webp','AVEVA'],
    [F+'6a344a06d10d5c3c6afc9cab_oPe7sO8kTiEFsxvCAiStKSjOCswiCvSm-7s0m6nT4SQ.webp','Ultimo'],
    [F+'6a344a0bf0532e266e435c9d_WVVrHK-XfX_yoQGJucElfJ5QjASoVcYkf8UG9fpaW4g.webp','Epicor'],
    [F+'6a344a10c5df930cf34524d7_w8slZg6S94keIugSVT0rnEdvWovE81C1hS7-mCo57oQ.webp','TOTVS'],
    [F+'6a344a1368ab3f4d2c24f801_L9Q2JjaG0ygant3yPMuIQQcdDQSj4VrMrkXJiJ3Smfc.webp','Sage Intacct'],
    [F+'6a344a296530369120df774b_8bWQ9bZZ5lkb63VKxJOtruMGo5MuC9Tdm63ZBqp8i4A.webp','Fiix']
  ];
  var NS='http://www.w3.org/2000/svg';

  /* only the shipped variant remains; the second concept was dropped */
  var MODE='a';

  /* Inner ring reads sharp, the two outer ones fall away. The logos sit low
     and desaturated on purpose - at rest they are wallpaper behind the copy,
     and they only come back to full strength when the pointer racks one into
     focus or the scroll lands them on the rail. */
  var RINGS=[{n:11,fx:.395,fy:.335,s:56,bl:0.8, op:.50,sat:.80,br:.92},
             {n:14,fx:.505,fy:.440,s:74,bl:3.5, op:.34,sat:.85,br:.95},
             {n:16,fx:.625,fy:.550,s:96,bl:9,   op:.18,sat:.95,br:1  }];

  var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  function icon(kind){
    return kind==='api'
      ? '<svg viewBox="0 0 24 24"><path d="M8 17l-5-5 5-5M16 7l5 5-5 5M14 4l-4 16"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>';
  }

  var STATE={tiles:[],mobile:false};

  function build(hero){
    var host=hero.querySelector('[data-rings]'),
        veil=hero.querySelector('.wh-veil'),
        /* measure the tiles' own containing block, not the hero: they are
           positioned inside it, so this is the only box their pixel
           coordinates are meaningful in */
        W=host.clientWidth||hero.clientWidth,
        H=host.clientHeight||hero.clientHeight,
        mobile=W<992;

    STATE.mobile=mobile;
    host.innerHTML='';
    hero.querySelectorAll('.wh-links,.wh-ports,.wh-packets').forEach(function(n){n.remove();});

    var ai=0, geo=[], all=[],
        reserve = (MODE==='a' && !mobile);

    /* ------------------------------------------------------------------
       The two gateways read as ONE pair directly under the copy. They used
       to be pinned at W/2 +/- W*0.395, so a 2560 screen flung them 2022px
       apart and stuck them to opposite edges. Now they are an ordinary
       centred row inside the copy block: their separation is fixed, and
       their position comes from the layout rather than a guessed offset.
       Built before the rings so the orbit can keep clear of them.
       ------------------------------------------------------------------ */
    var ports=null, pos=null, keep=null;
    if(MODE==='a'){
      ports=document.createElement('div');
      ports.className='wh-ports';
      [['api','Unified API','REST · GraphQL'],['mcp','MCP server','for AI agents']]
        .forEach(function(d){
          var el=document.createElement('div');
          el.className='wh-port '+d[0];
          el.innerHTML='<div class="ic">'+icon(d[0])+'</div>'+
                       '<div><b>'+d[1]+'</b><span>'+d[2]+'</span></div>';
          ports.appendChild(el);
        });
      hero.querySelector('.home-s1-box').appendChild(ports);

      if(!mobile){
        var hr=host.getBoundingClientRect();
        pos=[]; keep={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9};
        ports.querySelectorAll('.wh-port').forEach(function(el){
          var r=el.getBoundingClientRect();
          pos.push([r.left+r.width/2-hr.left, r.top+r.height/2-hr.top]);
          keep.x0=Math.min(keep.x0,r.left-hr.left);
          keep.x1=Math.max(keep.x1,r.right-hr.left);
          keep.y0=Math.min(keep.y0,r.top-hr.top);
          keep.y1=Math.max(keep.y1,r.bottom-hr.top);
        });
      }
    }

    RINGS.forEach(function(R,ri){
      var ring=document.createElement('div');
      ring.className='wh-ring';
      /* outer rings react more to the pointer - that is what sells the depth */
      ring.dataset.depth=(0.4+ri*0.55).toFixed(2);
      host.appendChild(ring);

      /* on narrow screens push the rings out so they never fight the copy */
      var fx=mobile?R.fx+0.30:R.fx,
          fy=mobile?R.fy+0.10:R.fy,
          rx=W*fx, ry=H*fy,
          n=mobile?Math.max(6,R.n-6):R.n,
          s=mobile?Math.round(R.s*0.6):R.s,
          pts=[];

      for(var i=0;i<n;i++){
        var a=(i/n)*Math.PI*2 + ri*0.42 + 0.18;
        var cx=W/2+Math.cos(a)*rx, cy=H/2+Math.sin(a)*ry;
        pts.push({x:cx,y:cy,a:a});

        /* the gateways moved to the centre, so the keep-out moved with them:
           the measured box around the pair rather than the 3 and 9 o'clock slots */
        if(reserve && keep && ri<2 &&
           cx>keep.x0-58 && cx<keep.x1+58 && cy>keep.y0-46 && cy<keep.y1+46) continue;

        var L=APPS[(ai++)%APPS.length];
        var t=document.createElement('div');
        t.className='wh-tile';
        /* px, not %: the scroll choreography moves tiles by an exact pixel
           delta, and a percentage would resolve against a box that is not
           guaranteed to be the height this layout was computed against */
        t.style.cssText='--x:'+cx.toFixed(1)+'px;--y:'+cy.toFixed(1)+'px;'+
                        '--s:'+s+'px;--r:'+((i%2?1:-1)*(5+(i*7)%11))+'deg;'+
                        '--t:'+(-(i*1.4+ri*0.9)).toFixed(1)+'s;--dur:'+(13+(i%5)*1.9)+'s;'+
                        '--bl:'+R.bl+'px;--op:'+R.op+';'+
                        '--sat:'+R.sat+';--br:'+R.br+';';
        t.dataset.cx=cx.toFixed(1); t.dataset.cy=cy.toFixed(1);

        t.innerHTML='<div class="sc"><div class="fl"><div class="in">'+
                    '<img src="'+L[0]+'" alt="'+L[1]+'" loading="lazy"></div></div></div>'+
                    '<div class="name">'+L[1]+'</div>';
        ring.appendChild(t);

        all.push({el:t,ring:ri,a:a,x:cx,y:cy,s:s,bl:R.bl,op:R.op,sat:R.sat,br:R.br});
      }
      geo.push({rx:rx,ry:ry,pts:pts});
    });

    /* ---------------- mode 1: gateways fanned into the systems ---------------- */
    if(MODE==='a' && !mobile && pos){
        /* Each gateway owns its half of the map and threads into every system
           on that side, across the inner and middle rings - not just the
           nearest few. Opacity falls off with distance so the fan reads as
           depth rather than noise. */
        var svg=document.createElementNS(NS,'svg');
        svg.setAttribute('class','wh-links');
        svg.setAttribute('viewBox','0 0 '+W+' '+H);
        svg.setAttribute('preserveAspectRatio','none');

        /* ------------------------------------------------------------
           Every link on a side collapses into ONE static <path> per
           opacity bucket - 6 paths for the whole hero, painted once.
           The sense of flow comes from a few dots riding generated
           translate3d tracks, which the compositor owns outright.
           ------------------------------------------------------------ */
        var packets=document.createElement('div');
        packets.className='wh-packets';
        var kf=[], pk=0;

        [[0,'#71a1ff',-1],[1,'#ef68f2',1]].forEach(function(cfg){
          var from=pos[cfg[0]], side=cfg[2], col=cfg[1];
          var targets=all.filter(function(o){
            if(o.ring>1) return false;                     /* skip the far ring */
            /* the pair now sits in the middle, so a link to a system straight
               above it would run right through the headline and the buttons.
               Nothing directly over the copy column gets wired. */
            if(keep && Math.abs(o.x-W/2)<378 && o.y<keep.y0-14) return false;
            var d=(o.x-from[0])*(o.x-from[0])+(o.y-from[1])*(o.y-from[1]);
            /* same half of the stage, or close enough to still belong to it */
            return (side<0 ? o.x<W*0.56 : o.x>W*0.44) && d>40*40;
          }).map(function(o){
            return {o:o,d:Math.sqrt((o.x-from[0])*(o.x-from[0])+(o.y-from[1])*(o.y-from[1]))};
          }).sort(function(p,q){return p.d-q.d;}).slice(0,12);

          var far=targets.length?targets[targets.length-1].d:1;
          var buckets=[[],[],[]];

          targets.forEach(function(tg,k){
            var q=tg.o,
                /* bow each link away from the gateway so the fan never
                   collapses into a starburst of straight lines */
                mx=(from[0]+q.x)/2 + (q.y-from[1])*0.16,
                my=(from[1]+q.y)/2 - (q.x-from[0])*0.16,
                near=1-Math.min(1,tg.d/far);

            buckets[near>0.62?0:near>0.3?1:2].push(
              'M'+from[0]+' '+from[1]+' Q'+mx.toFixed(1)+' '+my.toFixed(1)+
              ' '+q.x.toFixed(1)+' '+q.y.toFixed(1));

            /* one dot every third link: enough to read as traffic, few
               enough that the repaint area stays a handful of pixels */
            if(k%3===1 && pk<8){
              var nm='whPk'+pk, steps=[], SN=18;
              for(var t=0;t<=SN;t++){
                var u=t/SN, v=1-u,
                    x=v*v*from[0]+2*v*u*mx+u*u*q.x,
                    y=v*v*from[1]+2*v*u*my+u*u*q.y,
                    frag=(u*100).toFixed(1)+'%{transform:translate3d('+
                         x.toFixed(1)+'px,'+y.toFixed(1)+'px,0)';
                /* opacity only at the ends, so the dot fades in and out */
                frag += (t===0?';opacity:0' : t===1?';opacity:1'
                       : t===SN-1?';opacity:1' : t===SN?';opacity:0' : '');
                steps.push(frag+'}');
              }
              kf.push('@keyframes '+nm+'{'+steps.join('')+'}');

              var dot=document.createElement('i');
              dot.className='wh-pk';
              dot.style.cssText='background:'+col+';box-shadow:0 0 9px 1px '+col+
                ';animation:'+nm+' '+(2.6+(pk%4)*0.45).toFixed(2)+
                's linear infinite;animation-delay:'+(-(pk*0.61)).toFixed(2)+'s';
              packets.appendChild(dot);
              pk++;
            }
          });

          buckets.forEach(function(ds,bi){
            if(!ds.length) return;
            var p=document.createElementNS(NS,'path');
            p.setAttribute('d',ds.join(' '));
            p.setAttribute('stroke',col);
            p.setAttribute('stroke-width',[1.5,1.2,1][bi]);
            p.setAttribute('opacity',[0.42,0.26,0.15][bi]);
            svg.appendChild(p);
          });
        });

        var sheet=hero.querySelector('[data-pk-kf]');
        if(!sheet){
          sheet=document.createElement('style');
          sheet.setAttribute('data-pk-kf','');
          hero.appendChild(sheet);
        }
        sheet.textContent=kf.join('');

        hero.insertBefore(svg,veil);
        hero.insertBefore(packets,veil);
    }

    /* ---------------- scroll targets: unwrap the orbit into one line -------- */
    /* Ordered by where each system already sits horizontally, so tiles travel
       almost straight down onto the rail instead of crossing each other and
       piling up mid-flight. */
    var row=all.filter(function(o){return o.ring<2;})
               .sort(function(p,q){return p.x-q.x;});
    var N=row.length, pad=W*0.05, span=W-pad*2, step=span/N, target=Math.min(50,step*0.82);
    row.forEach(function(o,k){
      o.tx=pad+step*(k+0.5);
      /* low in the frame: with no pin the hero is already sliding up by the
         time the line forms, so it has to land well below centre to still be
         comfortably on screen when the choreography finishes */
      o.ty=H*ROWY;
      o.tsc=target/o.s;
      o.k=N>1 ? k/(N-1) : 0;   /* drives the left-to-right unroll wave */
    });
    all.filter(function(o){return o.ring===2;}).forEach(function(o){
      o.tx=o.x; o.ty=o.y; o.tsc=1; o.fade=true;   /* the far ring just clears out */
    });

    var rail=hero.querySelector('.wh-rail');
    if(rail) rail.style.top=(H*ROWY).toFixed(1)+'px';

    STATE.tiles=all;
    STATE.pk=hero.querySelector('.wh-packets');
    STATE.hero=hero;
    STATE.W=W; STATE.H=H;
    apply(lastP);
  }

  /* ==================================================================
     scroll choreography - no pin.

     p is how far the hero has scrolled past the top of the viewport,
     measured against RUN (45% of the hero). So the whole thing plays
     out in under half a screen of scrolling and then the section just
     leaves. DEAD gives a small dead zone so the first nudge of the
     wheel does not set everything moving.

       0.00 - 0.62  copy fades as it slides out of frame on its own
       0.00 - 1.00  the orbit unwraps into one sharp line of systems,
                    landing low in the frame
     ================================================================== */
  var RUN=0.45, DEAD=0.05, ROWY=0.78;
  var lastP=0;
  var clamp=function(v){return v<0?0:v>1?1:v;};
  var easeInOut=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;};

  function apply(p){
    var hero=STATE.hero; if(!hero) return;
    if(STATE.mobile||reduce){
      hero.style.removeProperty('--co'); hero.style.removeProperty('--cy');
      return;
    }
    var e1=easeInOut(clamp(p/0.62)),            /* copy fade            */
        raw=clamp(p),                           /* orbit -> line, raw   */
        e2=easeInOut(raw),
        STAG=0.34;                              /* width of the unroll wave */

    var c=hero.querySelector('.m-container');
    /* no translate: the page scroll already carries the copy upward */
    c.style.setProperty('--co',(1-e1).toFixed(3));

    var lo=1-easeInOut(clamp(p/0.34));                       /* gateways + links */
    hero.style.setProperty('--lo',lo.toFixed(3));
    /* once the fan is invisible its dots stop animating instead of burning
       frames behind an opacity:0 layer */
    if(STATE.pk) STATE.pk.classList.toggle('off',lo<0.02);
    hero.style.setProperty('--vo',(1-0.9*e2).toFixed(3));      /* veil lifts             */
    hero.style.setProperty('--go',(1-0.75*e2).toFixed(3));     /* glow settles, stays lit */
    hero.style.setProperty('--rlo',clamp((e2-0.5)/0.35).toFixed(3));

    STATE.tiles.forEach(function(o){
      var el=o.el;
      if(o.fade){
        el.style.setProperty('--op',(o.op*(1-clamp(e2*1.5))).toFixed(3));
        return;
      }
      /* stagger: each system leaves orbit just after the one to its left */
      /* each system leaves orbit slightly after the one to its left, so the
         ring reads as unrolling rather than every tile jumping at once */
      var ei=easeInOut(clamp((raw - o.k*STAG)/(1-STAG)));
      el.style.setProperty('--fk',(1-ei).toFixed(3));
      el.style.setProperty('--dx',((o.tx-o.x)*ei).toFixed(1)+'px');
      el.style.setProperty('--dy',((o.ty-o.y)*ei).toFixed(1)+'px');
      el.style.setProperty('--ssc',(1+(o.tsc-1)*ei).toFixed(3));
      el.style.setProperty('--rk',(1-ei).toFixed(3));
      el.style.setProperty('--bl',(o.bl*(1-ei)).toFixed(2)+'px');
      /* pale while in orbit, full strength once landed on the rail */
      el.style.setProperty('--op',(o.op+(1-o.op)*ei).toFixed(3));
      el.style.setProperty('--sat',(o.sat+(1-o.sat)*ei).toFixed(3));
      el.style.setProperty('--br',(o.br+(1-o.br)*ei).toFixed(3));
    });
  }

  function onScroll(){
    var hero=STATE.hero; if(!hero) return;
    var h=hero.offsetHeight, gone=-hero.getBoundingClientRect().top;
    lastP = h>0 ? clamp((gone - h*DEAD)/(h*RUN)) : 0;
    apply(lastP);
  }

  /* ==================================================================
     pointer: ring parallax, a spotlight, and focus-on-nearest-system
     ================================================================== */
  function wire(hero){
    var spot=hero.querySelector('[data-spot]'),
        raf=0, tx=0, ty=0, px=0, py=0, cx=0, cy=0, focused=null;

    function frame(){
      raf=0;
      px+=(tx-px)*.09; py+=(ty-py)*.09;   /* ease, so the parallax never snaps */
      hero.querySelectorAll('.wh-ring').forEach(function(r){
        var d=parseFloat(r.dataset.depth)||1;
        r.style.transform='translate3d('+(px*d*26).toFixed(2)+'px,'+(py*d*18).toFixed(2)+'px,0)';
      });
      if(spot) spot.style.transform='translate3d('+(cx-410)+'px,'+(cy-410)+'px,0)';
      if(Math.abs(tx-px)>.0015||Math.abs(ty-py)>.0015) raf=requestAnimationFrame(frame);
    }

    hero.addEventListener('pointermove',function(e){
      var b=hero.getBoundingClientRect();
      cx=e.clientX-b.left; cy=e.clientY-b.top;
      tx=(cx/b.width-.5)*2; ty=(cy/b.height-.5)*2;
      hero.classList.add('live');
      if(!raf) raf=requestAnimationFrame(frame);

      /* once the orbit starts unwrapping, stop racking focus */
      if(lastP>0.12){
        if(focused){focused.classList.remove('focus');focused=null;}
        return;
      }
      /* centres come from the cached layout, so this reads no layout at all */
      var best=null, bd=175*175;
      STATE.tiles.forEach(function(o){
        var dx=cx-o.x, dy=cy-o.y, d=dx*dx+dy*dy;
        if(d<bd){bd=d;best=o.el;}
      });
      if(best!==focused){
        if(focused) focused.classList.remove('focus');
        if(best) best.classList.add('focus');
        focused=best;
      }
    },{passive:true});

    hero.addEventListener('pointerleave',function(){
      hero.classList.remove('live'); tx=0; ty=0;
      if(focused){focused.classList.remove('focus');focused=null;}
      if(!raf) raf=requestAnimationFrame(frame);
    });
  }

  var hero=document.querySelector('.wh-hero');
  /* one frame in, so the hero has its final box before we measure it */
  build(hero); wire(hero); onScroll();
  requestAnimationFrame(function(){ build(hero); onScroll(); });

  var ticking=false;
  window.addEventListener('scroll',function(){
    if(ticking) return; ticking=true;
    requestAnimationFrame(function(){ onScroll(); ticking=false; });
  },{passive:true});

  window.addEventListener('load',function(){ build(hero); onScroll(); });
  var rt; window.addEventListener('resize',function(){
    clearTimeout(rt); rt=setTimeout(function(){ build(hero); onScroll(); },220);
  });
})();
