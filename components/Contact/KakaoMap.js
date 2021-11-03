import React, { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // div to display map
      mapOption = {
        center: new kakao.maps.LatLng(33.451475, 126.570528), // coordinates of the center of the map
        level: 3, // zoom level of the map
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // create the map

    // Prevents map zooming and zooming using the mouse wheel and mobile touch
    map.setZoomable(false);

    // Create a map type control that can switch the map type between normal map and skyview
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // we need to add the control to the map so it will show up on the map
    // kakao.maps.ControlPosition defines where the control will be displayed
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // Create a zoom control to control the zoom of the map
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // Create an address-coordinate conversion object
    const geocoder = new kakao.maps.services.Geocoder();

    // Retrieve coordinates by address
    geocoder.addressSearch(
      "경기 수원시 팔달구 일월로22번길 7 삼민빌딩 2층 (우)16422",
      function (result, status) {
        // If the search is successfully completed
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // Mark the position received as the result value as a marker
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // Display the description of the place in the infowindow
          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">차민내과의원</div>',
          });
          infowindow.open(map, marker);

          // Move the center of the map to the position received as the result
          map.setCenter(coords);
        }
      }
    );
    
    // var latlng  = new kakao.maps.LatLng(33.450701, 126.570667); 

    // // display the marker on the map
    // var marker = new kakao.maps.Marker({
    //   map: map,
    //   position: latlng,
    // });

    // // This is the content to display in the custom overlay
    // // Because custom overlays allow users to freely compose content and control events as shown below.
    // // No separate event method is provided
    // var content =
    //   '<div class="wrap">' +
    //   '    <div class="info">' +
    //   '        <div class="title">' +
    //   "            카카오 스페이스닷원" +
    //   '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
    //   "        </div>" +
    //   '        <div class="body">' +
    //   '            <div class="img">' +
    //   '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
    //   "           </div>" +
    //   '            <div class="desc">' +
    //   '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
    //   '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
    //   '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
    //   "            </div>" +
    //   "        </div>" +
    //   "    </div>" +
    //   "</div>";

    // // Display the custom overlay over the marker
    // // Positioned using CSS to display a custom overlay around the marker
    // var overlay = new kakao.maps.CustomOverlay({
    //   content: content,
    //   map: map,
    //   position: marker.getPosition(),
    // });

    // // show custom overlay when marker is clicked
    // kakao.maps.event.addListener(marker, "click", function () {
    //   overlay.setMap(map);
    // });

    // // This function is called to close the custom overlay
    // function closeOverlay() {
    //   overlay.setMap(null);
    // }

    // var overlay = new kakao.maps.CustomOverlay({
    //   yAnchor: 3,
    //   position: latlng,
    // });

    // var content = document.createElement("div");
    // content.className = "overlay";
    // content.innerHTML = "파크 :D";

    // var closeBtn = document.createElement("button");
    // closeBtn.innerHTML = "닫기";
    // closeBtn.onclick = function () {
    //   overlay.setMap(null);
    // };
    // content.appendChild(closeBtn);

    // overlay.setContent(content);

    // kakao.maps.event.addListener(marker, "click", function () {
    //   overlay.setMap(map);
    // });
  }, []);

  return (
    <div className="map-area">
      <div
        id="map"
        style={{ width: "100%", height: "400px", border: "none" }}
      ></div>
    </div>
  );
};

export default KakaoMap;
