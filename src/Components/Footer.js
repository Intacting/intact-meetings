import React, { useState } from "react";
import "../assets/style.css";
const Footer = ()=>{
    const [ id, setId] = useState(1);
    const toggleDown = ()=>{
        if (id == 1) setId(2);
    else setId(1);
    }
    return (<>
    <section className="footer">
        <div className="footer-a">
            <div className="footer-b">
                <div className="footer-c">
            <h3 class="footer-heading">Easy<br/><span class="CSnXO ahead">ahead</span></h3>
            <p className="footer-para">We take the work out of connecting with others so you can accomplish more.</p>
            <div className="footer-d">
                <div className="footer-e">
                    <div className="dropdown-footer">
                        <div className="language-f">
                            <div className="language-fa">
                           English
                           <i onClick={()=>toggleDown()}class="fa-solid fa-angle-down"></i>
                            </div>
                            <div className={`${id==2? "language-type-active":"language-type"}`}>
                                <span className="language-type-name-a ">English</span>
                                <span className="language-type-name">Francais</span>
                                <span className="language-type-name">Espanol</span>
                                <span className="language-type-name">Deutsch</span>
                                <span className="language-type-name">Portugues</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-black">
                    <div className="footer-d">
                        <a className="button-black-a">
                            <img src="https://assets-marketing-site.calendly.com/static/AppStore-15f01eefb2013206cc7e26d98fbe95fb.svg" className="button-black-b" alt="Img"/>
                        </a>
                    </div>
                    <div className="footer-d">
                    <a className="button-black-a">
                            <img className="button-black-b" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsKCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iPgoJPCFFTlRJVFkgbnNfYWkgImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyI+Cgk8IUVOVElUWSBuc19ncmFwaHMgImh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgoJPCFFTlRJVFkgbnNfdmFycyAiaHR0cDovL25zLmFkb2JlLmNvbS9WYXJpYWJsZXMvMS4wLyI+Cgk8IUVOVElUWSBuc19pbXJlcCAiaHR0cDovL25zLmFkb2JlLmNvbS9JbWFnZVJlcGxhY2VtZW50LzEuMC8iPgoJPCFFTlRJVFkgbnNfc2Z3ICJodHRwOi8vbnMuYWRvYmUuY29tL1NhdmVGb3JXZWIvMS4wLyI+Cgk8IUVOVElUWSBuc19jdXN0b20gImh0dHA6Ly9ucy5hZG9iZS5jb20vR2VuZXJpY0N1c3RvbU5hbWVzcGFjZS8xLjAvIj4KCTwhRU5USVRZIG5zX2Fkb2JlX3hwYXRoICJodHRwOi8vbnMuYWRvYmUuY29tL1hQYXRoLzEuMC8iPgpdPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxpdmVsbG9fMSIgeG1sbnM6eD0iJm5zX2V4dGVuZDsiIHhtbG5zOmk9IiZuc19haTsiIHhtbG5zOmdyYXBoPSImbnNfZ3JhcGhzOyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU0MzUuOCAxNjA0IgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0MzUuOCAxNjA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQTZBNkE2O30KCS5zdDJ7ZmlsbDojRkZGRkZGO30KCS5zdDN7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDR7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Q1e2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQoJLnN0NntmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjU1ZHSURfM18pO30KCS5zdDd7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDp1cmwoI1NWR0lEXzRfKTt9Cgkuc3Q4e29wYWNpdHk6MC4yO2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0OXtvcGFjaXR5OjAuMTI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QxMHtvcGFjaXR5OjAuMjU7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQo8L3N0eWxlPgo8bWV0YWRhdGE+Cgk8c2Z3ICB4bWxucz0iJm5zX3NmdzsiPgoJCTxzbGljZXM+PC9zbGljZXM+CgkJPHNsaWNlU291cmNlQm91bmRzICBib3R0b21MZWZ0T3JpZ2luPSJ0cnVlIiBoZWlnaHQ9IjE2MDQiIHdpZHRoPSI1NDM1LjgiIHg9Ii0yNjU2LjkiIHk9Ii03ODQiPjwvc2xpY2VTb3VyY2VCb3VuZHM+Cgk8L3Nmdz4KPC9tZXRhZGF0YT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTUyMzQuNCwxNjA0aC01MDMzQzkwLjQsMTYwNCwwLDE1MTMuNiwwLDE0MDMuNXYtMTIwM0MwLDkwLDkwLjQsMCwyMDEuNCwwaDUwMzNjMTEwLjksMCwyMDEuNCw5MCwyMDEuNCwyMDAuNQoJdjEyMDNDNTQzNS44LDE1MTMuNiw1MzQ1LjMsMTYwNCw1MjM0LjQsMTYwNHoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUyMzQuNCwzMi4xYzkzLjEsMCwxNjkuMyw3NS43LDE2OS4zLDE2OC40djEyMDNjMCw5Mi43LTc1LjcsMTY4LjQtMTY5LjMsMTY4LjRoLTUwMzMKCWMtOTMuMSwwLTE2OS4zLTc1LjctMTY5LjMtMTY4LjR2LTEyMDNjMC05Mi43LDc1LjctMTY4LjQsMTY5LjMtMTY4LjRDMjAxLjQsMzIuMSw1MjM0LjQsMzIuMSw1MjM0LjQsMzIuMXogTTUyMzQuNCwwaC01MDMzCglDOTAuNCwwLDAsOTAuNCwwLDIwMC41djEyMDNDMCwxNTE0LDkwLjQsMTYwNCwyMDEuNCwxNjA0aDUwMzNjMTEwLjksMCwyMDEuNC05MCwyMDEuNC0yMDAuNXYtMTIwM0M1NDM1LjgsOTAuNCw1MzQ1LjMsMCw1MjM0LjQsMHoiCgkvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjg2My42LDUzMC42Yy0zNi4zLDAtNjYuOS0xMi43LTkxLjEtMzcuN2MtMjQtMjQuMy0zNy40LTU3LjgtMzYuOC05MmMwLTM2LjUsMTIuNC02Ny40LDM2LjgtOTEuOQoJYzI0LjEtMjUsNTQuNy0zNy43LDkxLTM3LjdjMzUuOSwwLDY2LjUsMTIuNyw5MS4xLDM3LjdjMjQuNCwyNS4zLDM2LjgsNTYuMiwzNi44LDkxLjljLTAuNCwzNi42LTEyLjgsNjcuNS0zNi44LDkxLjkKCUMyOTMwLjUsNTE4LDI4OTkuOSw1MzAuNiwyODYzLjYsNTMwLjZ6IE0xNzgzLjUsNTMwLjZjLTM1LjUsMC02Ni4zLTEyLjUtOTEuNS0zNy4yYy0yNS0yNC42LTM3LjctNTUuNy0zNy43LTkyLjQKCXMxMi43LTY3LjgsMzcuNy05Mi40YzI0LjctMjQuNyw1NS41LTM3LjIsOTEuNS0zNy4yYzE3LjYsMCwzNC43LDMuNSw1MS4xLDEwLjZjMTYuMSw2LjksMjkuMiwxNi4zLDM4LjksMjcuOGwyLjQsMi45bC0yNy4xLDI2LjYKCWwtMi44LTMuM2MtMTUuMy0xOC4yLTM1LjgtMjcuMS02Mi45LTI3LjFjLTI0LjIsMC00NS4zLDguNi02Mi43LDI1LjZjLTE3LjUsMTcuMS0yNi40LDM5LjUtMjYuNCw2Ni42czguOSw0OS41LDI2LjQsNjYuNgoJYzE3LjQsMTcsMzguNSwyNS42LDYyLjcsMjUuNmMyNS44LDAsNDcuNS04LjYsNjQuNC0yNS42YzEwLTEwLDE2LjItMjQsMTguNC00MS43aC04Ni45di0zNy40aDEyNC4ybDAuNSwzLjQKCWMwLjksNi4zLDEuOCwxMi44LDEuOCwxOC44YzAsMzQuNS0xMC40LDYyLjQtMzEsODNDMTg1MS4xLDUxOC4yLDE4MjAuNSw1MzAuNiwxNzgzLjUsNTMwLjZ6IE0zMjE5LjYsNTI1LjNoLTM4LjNMMzA2NCwzMzcuNmwxLDMzLjgKCXYxNTMuOGgtMzguM1YyNzYuN2g0My43bDEuMiwxLjlsMTEwLjMsMTc2LjhsLTEtMzMuN1YyNzYuN2gzOC43VjUyNS4zeiBNMjU3NS44LDUyNS4zSDI1MzdWMzE0LjFoLTY3LjN2LTM3LjRIMjY0M3YzNy40aC02Ny4zCglWNTI1LjN6IE0yNDM4LjEsNTI1LjNoLTM4LjdWMjc2LjdoMzguN1Y1MjUuM3ogTTIyMjAuNiw1MjUuM2gtMzguN1YzMTQuMWgtNjcuM3YtMzcuNGgxNzMuM3YzNy40aC02Ny4zVjUyNS4zeiBNMjA5MC4xLDUyNC45CgloLTE0OC40VjI3Ni43aDE0OC40djM3LjRoLTEwOS42djY4LjJoOTguOXYzN2gtOTguOXY2OC4yaDEwOS42VjUyNC45eiBNMjgwMC45LDQ2Ny4yYzE3LjMsMTcuMywzOC4zLDI2LDYyLjcsMjYKCWMyNS4xLDAsNDUuNi04LjUsNjIuNy0yNmMxNy0xNywyNS42LTM5LjMsMjUuNi02Ni4ycy04LjYtNDkuMy0yNS41LTY2LjJjLTE3LjMtMTcuMy0zOC40LTI2LTYyLjctMjZjLTI1LjEsMC00NS42LDguNS02Mi42LDI2CgljLTE3LDE3LTI1LjYsMzkuMy0yNS42LDY2LjJTMjc4NCw0NTAuMywyODAwLjksNDY3LjJMMjgwMC45LDQ2Ny4yeiIvPgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjczMi4xLDg3Mi40Yy05NC41LDAtMTcxLjEsNzEuNy0xNzEuMSwxNzAuNmMwLDk4LDc3LjEsMTcwLjYsMTcxLjEsMTcwLjZjOTQuNSwwLDE3MS4xLTcyLjIsMTcxLjEtMTcwLjYKCUMyOTAzLjIsOTQ0LjEsMjgyNi42LDg3Mi40LDI3MzIuMSw4NzIuNHogTTI3MzIuMSwxMTQ2Yy01MS43LDAtOTYuMi00Mi44LTk2LjItMTAzLjRjMC02MS41LDQ0LjYtMTAzLjQsOTYuMi0xMDMuNAoJYzUxLjcsMCw5Ni4yLDQxLjksOTYuMiwxMDMuNEMyODI4LjQsMTEwMy42LDI3ODMuOCwxMTQ2LDI3MzIuMSwxMTQ2eiBNMjM1OC44LDg3Mi40Yy05NC41LDAtMTcxLjEsNzEuNy0xNzEuMSwxNzAuNgoJYzAsOTgsNzcuMSwxNzAuNiwxNzEuMSwxNzAuNmM5NC41LDAsMTcxLjEtNzIuMiwxNzEuMS0xNzAuNkMyNTI5LjksOTQ0LjEsMjQ1My4yLDg3Mi40LDIzNTguOCw4NzIuNHogTTIzNTguOCwxMTQ2CgljLTUxLjcsMC05Ni4yLTQyLjgtOTYuMi0xMDMuNGMwLTYxLjUsNDQuNi0xMDMuNCw5Ni4yLTEwMy40YzUxLjcsMCw5Ni4yLDQxLjksOTYuMiwxMDMuNEMyNDU1LDExMDMuNiwyNDEwLjUsMTE0NiwyMzU4LjgsMTE0NnoKCSBNMTkxNC42LDkyNC41djcyLjJoMTczLjNjLTUuMyw0MC41LTE4LjcsNzAuNC0zOS4yLDkwLjljLTI1LjQsMjUuNC02NC42LDUzLTEzMy43LDUzYy0xMDYuNSwwLTE4OS44LTg2LTE4OS44LTE5Mi41CglzODMuMy0xOTIuNSwxODkuOC0xOTIuNWM1Ny41LDAsOTkuNCwyMi43LDEzMC41LDUxLjdsNTEuMi01MS4yYy00My4yLTQxLjQtMTAwLjctNzMuMS0xODEuMy03My4xYy0xNDYuMSwwLTI2OC43LDExOS0yNjguNywyNjQuNwoJYzAsMTQ2LjEsMTIyLjUsMjY0LjcsMjY4LjcsMjY0LjdjNzguOSwwLDEzOC4xLTI1LjgsMTg0LjktNzQuNGM0Ny43LTQ3LjcsNjIuOC0xMTUsNjIuOC0xNjkuM2MwLTE2LjktMS4zLTMyLjEtNC00NWgtMjQ0LjYKCUMxOTE0LjYsOTIzLjYsMTkxNC42LDkyNC41LDE5MTQuNiw5MjQuNXogTTM3MzEuNSw5ODAuN2MtMTQuMy0zOC4zLTU3LjUtMTA4LjctMTQ2LjEtMTA4LjdjLTg3LjgsMC0xNjAuOCw2OS4xLTE2MC44LDE3MC42CgljMCw5NS44LDcyLjIsMTcwLjYsMTY5LjMsMTcwLjZjNzgsMCwxMjMuNC00Ny43LDE0Mi4xLTc1LjdsLTU3LjktMzguOGMtMTkuMiwyOC41LTQ1LjksNDcuMi04My44LDQ3LjJjLTM4LjMsMC02NS4xLTE3LjQtODIuOS01MS43CglsMjI4LjEtOTQuNUMzNzM5LjUsOTk5LjgsMzczMS41LDk4MC43LDM3MzEuNSw5ODAuN3ogTTM0OTguOSwxMDM3LjdjLTEuOC02NS45LDUxLjItOTkuNCw4OS4xLTk5LjRjMjkuOSwwLDU0LjgsMTQuNyw2My4zLDM2LjEKCUwzNDk4LjksMTAzNy43eiBNMzMxMy42LDEyMDNoNzQuOVY3MDEuOGgtNzQuOVYxMjAzeiBNMzE5MC42LDkxMC4zaC0yLjdjLTE2LjktMjAuMS00OS0zOC4zLTkwLTM4LjMKCWMtODUuMSwwLTE2My41LDc0LjktMTYzLjUsMTcxLjFjMCw5NS44LDc4LDE2OS44LDE2My41LDE2OS44YzQwLjUsMCw3My4xLTE4LjMsOTAtMzguOGgyLjd2MjQuNWMwLDY1LjEtMzQuOCwxMDAuMi05MC45LDEwMC4yCgljLTQ1LjksMC03NC40LTMzLTg2LTYwLjZsLTY1LjEsMjcuMmMxOC43LDQ1LDY4LjYsMTAwLjcsMTUxLDEwMC43Yzg3LjgsMCwxNjIuMi01MS43LDE2Mi4yLTE3Ny44Vjg4Mi4yaC03MC44djI4LjEKCUMzMTkxLjEsOTEwLjMsMzE5MC42LDkxMC4zLDMxOTAuNiw5MTAuM3ogTTMxMDQuNiwxMTQ2Yy01MS43LDAtOTQuOS00My4yLTk0LjktMTAyLjljMC02MC4yLDQzLjItMTAzLjgsOTQuOS0xMDMuOAoJYzUxLjIsMCw5MC45LDQ0LjEsOTAuOSwxMDMuOEMzMTk2LDExMDIuOCwzMTU1LjksMTE0NiwzMTA0LjYsMTE0NnogTTQwODIuMiw3MDEuOGgtMTc5LjFWMTIwM2g3NC45di0xODkuOGgxMDQuMwoJYzgyLjksMCwxNjQuNC02MC4xLDE2NC40LTE1NS41UzQxNjUuNSw3MDEuOCw0MDgyLjIsNzAxLjh6IE00MDg0LjQsOTQzLjJoLTEwNi41di0xNzJoMTA2LjVjNTYuMSwwLDg3LjgsNDYuMyw4Ny44LDg2CglDNDE3Mi4yLDg5Ni41LDQxNDAuMSw5NDMuMiw0MDg0LjQsOTQzLjJ6IE00NTQ2LjksODcxLjVjLTU0LjQsMC0xMTAuNSwyNC4xLTEzMy43LDc2LjZsNjYuNCwyNy42YzE0LjMtMjcuNiw0MC41LTM3LDY4LjItMzcKCWMzOC44LDAsNzgsMjMuMiw3OC45LDY0LjZ2NS4zYy0xMy40LTcuNi00Mi44LTE5LjItNzgtMTkuMmMtNzEuNywwLTE0NC40LDM5LjItMTQ0LjQsMTEyLjdjMCw2Ny4zLDU4LjgsMTEwLjUsMTI0LjMsMTEwLjUKCWM1MC4zLDAsNzgtMjIuNyw5NS4zLTQ5aDIuN3YzOC44aDcyLjJ2LTE5MkM0Njk4LjgsOTIxLDQ2MzIuNCw4NzEuNSw0NTQ2LjksODcxLjV6IE00NTM3LjUsMTE0NmMtMjQuNSwwLTU4LjgtMTItNTguOC00Mi44CgljMC0zOC44LDQyLjgtNTMuNSw3OS4zLTUzLjVjMzMsMCw0OC42LDcuMSw2OC4yLDE2LjlDNDYyMC44LDExMTEuNiw0NTgyLjgsMTE0NS42LDQ1MzcuNSwxMTQ2eiBNNDk2Mi4yLDg4Mi4ybC04NiwyMTcuNGgtMi43CglsLTg5LjEtMjE3LjRoLTgwLjZsMTMzLjcsMzAzLjlsLTc2LjIsMTY4LjloNzhMNTA0NSw4ODIuMkM1MDQ1LDg4Mi4yLDQ5NjIuMiw4ODIuMiw0OTYyLjIsODgyLjJ6IE00Mjg4LDEyMDNoNzQuOVY3MDEuOEg0Mjg4VjEyMDN6CgkiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNjgyLjEwNzciIHkxPSIxMzM5LjQ3ODMiIHgyPSIxNjI0LjI5MjQiIHkyPSIxMzA5LjYzNDUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTEuNjQgMCAwIC0yMi41NSAtMTg3MDUuNTk1NyAzMDU1NC4zNjkxKSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBBMEZGIi8+Cgk8c3RvcCAgb2Zmc2V0PSI2LjU2OTk5OWUtMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEExRkYiLz4KCTxzdG9wICBvZmZzZXQ9IjAuMjYwMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkVGRiIvPgoJPHN0b3AgIG9mZnNldD0iMC41MTIyIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBEMkZGIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjc2MDQiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMERGRkYiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEUzRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0NCIgZD0iTTQxOC40LDMwMi4xYy0xMS42LDEyLjUtMTguMywzMS42LTE4LjMsNTYuNnY4ODYuN2MwLDI1LDYuNyw0NC4xLDE4LjcsNTYuMWwzLjEsMi43bDQ5Ni44LTQ5Ni44di0xMS4xCglMNDIxLjUsMjk5LjRDNDIxLjUsMjk5LjQsNDE4LjQsMzAyLjEsNDE4LjQsMzAyLjF6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTcxMi42NjI0IiB5MT0iMTI3NC44Mzc2IiB4Mj0iMTYwNi41NjEzIiB5Mj0iMTI3NC44Mzc2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDkuMTQ1IDAgMCAtNy43IC0xNDMwNS41MzgxIDEwNjE4LjI1MSkiPgoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRTAwMCIvPgoJPHN0b3AgIG9mZnNldD0iMC40MDg3IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZCRDAwIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjc3NTQiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkE1MDAiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjlDMDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0NSIgZD0iTTEwODQsOTczLjVMOTE4LjMsODA3Ljh2LTExLjZMMTA4NCw2MzAuNWwzLjYsMi4ybDE5NiwxMTEuNGM1Ni4xLDMxLjYsNTYuMSw4My44LDAsMTE1LjhsLTE5NiwxMTEuNAoJQzEwODcuNiw5NzEuMywxMDg0LDk3My41LDEwODQsOTczLjV6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTcwNy40NDE0IiB5MT0iMTI5MC4wNDc1IiB4Mj0iMTY0Ni42ODIiIHkyPSIxMjExLjIyMjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTUuMDIgMCAwIC0xMS41Nzc1IC0yNDY1MC4yMjg1IDE1ODI5LjY0ODQpIj4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjNBNDQiLz4KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDMzExNjIiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0NiIgZD0iTTEwODcuNiw5NzEuM0w5MTguMyw4MDJsLTQ5OS45LDQ5OS45YzE4LjMsMTkuNiw0OSwyMS44LDgzLjMsMi43TDEwODcuNiw5NzEuMyIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzRfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE2NjAuNjM1NyIgeTE9IjEzNjUuNjY3NiIgeDI9IjE2ODcuNzY3IiB5Mj0iMTMzMC40NTAxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDE1LjAyIDAgMCAtMTEuNTcxNSAtMjQ2NTAuMjI4NSAxNTgwOS45OTIyKSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMzJBMDcxIi8+Cgk8c3RvcCAgb2Zmc2V0PSI2Ljg1MDAwMGUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiMyREE3NzEiLz4KCTxzdG9wICBvZmZzZXQ9IjAuNDc2MiIgc3R5bGU9InN0b3AtY29sb3I6IzE1Q0Y3NCIvPgoJPHN0b3AgIG9mZnNldD0iMC44MDA5IiBzdHlsZT0ic3RvcC1jb2xvcjojMDZFNzc1Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGMDc2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0xMDg3LjYsNjMyLjdMNTAxLjcsMjk5LjljLTM0LjMtMTkuNi02NS4xLTE2LjktODMuMywyLjdMOTE4LjMsODAyTDEwODcuNiw2MzIuN3oiLz4KPHBhdGggY2xhc3M9InN0OCIgZD0iTTEwODQsOTY3LjdsLTU4MS45LDMzMC42Yy0zMi41LDE4LjctNjEuNSwxNy40LTgwLjIsMC40bC0zLjEsMy4xbDMuMSwyLjdjMTguNywxNi45LDQ3LjcsMTguMyw4MC4yLTAuNAoJTDEwODgsOTcxLjNDMTA4OCw5NzEuMywxMDg0LDk2Ny43LDEwODQsOTY3Ljd6Ii8+CjxwYXRoIGNsYXNzPSJzdDkiIGQ9Ik0xMjgzLjYsODU0LjFsLTIwMC4xLDExMy42bDMuNiwzLjZsMTk2LTExMS40YzI4LjEtMTYsNDEuOS0zNyw0MS45LTU3LjlDMTMyMy4zLDgyMS4yLDEzMDksODM5LjQsMTI4My42LDg1NC4xCgl6Ii8+CjxwYXRoIGNsYXNzPSJzdDEwIiBkPSJNNTAxLjcsMzA1LjdsNzgxLjksNDQ0LjJjMjUuNCwxNC4zLDM5LjcsMzMsNDEuOSw1Mi4xYzAtMjAuOS0xMy44LTQxLjktNDEuOS01Ny45TDUwMS43LDI5OS45CgljLTU2LjEtMzIuMS0xMDEuNi01LjMtMTAxLjYsNTguOHY1LjhDNDAwLjEsMzAwLjMsNDQ1LjYsMjc0LDUwMS43LDMwNS43eiIvPgo8L3N2Zz4K" alt="Img"/>
                        </a>
                    </div>
                </div>
                <div className="share">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTE4ODEgMjIuMjYzMUMxNi4yMjExIDIyLjI2MzEgMjAuNzYxMyAxNS40OTI1IDIwLjc2MTMgOS42MjE2N0MyMC43NjEzIDkuNDI5MyAyMC43NTczIDkuMjM3OTMgMjAuNzQ4MiA5LjA0NzI5QzIxLjYyOTUgOC40MjAyIDIyLjM5NTcgNy42Mzc0NiAyMyA2Ljc0NjgyQzIyLjE5MTMgNy4xMDA1MyAyMS4zMjEgNy4zMzg3IDIwLjQwOCA3LjQ0NjA5QzIxLjMzOTcgNi44OTYwOSAyMi4wNTU1IDYuMDI1NjYgMjIuMzkyOSA0Ljk4ODI0QzIxLjUyMDcgNS40OTczNCAyMC41NTQ5IDUuODY3MjkgMTkuNTI2OSA2LjA2Njc5QzE4LjcwMyA1LjIwMzI2IDE3LjUyOTkgNC42NjMxMiAxNi4yMzIxIDQuNjYzMTJDMTMuNzM5MSA0LjY2MzEyIDExLjcxNzYgNi42NTI5OSAxMS43MTc2IDkuMTA1NjZDMTEuNzE3NiA5LjQ1NDQyIDExLjc1NzQgOS43OTMzNCAxMS44MzQ1IDEwLjExODdDOC4wODM0NCA5LjkzMzI1IDQuNzU3MDQgOC4xNjUwMyAyLjUzMTA4IDUuNDc2OUMyLjE0MyA2LjEzMzI5IDEuOTE5NTUgNi44OTYzNCAxLjkxOTU1IDcuNzA5ODdDMS45MTk1NSA5LjI1MTIzIDIuNzE2NSAxMC42MTIgMy45MjgzMiAxMS40MDgzQzMuMTg3OTEgMTEuMzg1OSAyLjQ5MjMgMTEuMTg1NCAxLjg4NDAyIDEwLjg1MjRDMS44ODMwMiAxMC44NzA5IDEuODgzMDIgMTAuODg5NiAxLjg4MzAyIDEwLjkwOTFDMS44ODMwMiAxMy4wNjEgMy40MzkxNCAxNC44NTc2IDUuNTA0MTkgMTUuMjY0N0M1LjEyNTEgMTUuMzY2NCA0LjcyNjI2IDE1LjQyMTEgNC4zMTQ0IDE1LjQyMTFDNC4wMjM2NSAxNS40MjExIDMuNzQwODkgMTUuMzkyNSAzLjQ2NTkxIDE1LjM0MTFDNC4wNDA0MSAxNy4xMDYxIDUuNzA2ODcgMTguMzkwOCA3LjY4MjYgMTguNDI3QzYuMTM3NSAxOS42MTg5IDQuMTkxMjkgMjAuMzI4OSAyLjA3NjY5IDIwLjMyODlDMS43MTI2MiAyMC4zMjg5IDEuMzUzMzEgMjAuMzA4NSAxIDIwLjI2NzNDMi45OTc1IDIxLjUyNzQgNS4zNjkzMiAyMi4yNjMxIDcuOTE4ODEgMjIuMjYzMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" alt="twitter" className="share-icon"/>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjI2NzIgOS45ODY2SDguMDUzMjJWMTMuMjMzOEgxMC4yNjcyVjIyLjk3NTJIMTMuOTU3MVYxMy4yMzM4SDE2LjYxMzlMMTYuOTA5IDkuOTg2NkgxMy45NTcxVjguNjA2NTZDMTMuOTU3MSA3Ljg3NTk1IDE0LjEwNDggNy41NTEyNCAxNC43Njg5IDcuNTUxMjRIMTYuOTA5VjMuNDkyMzFIMTQuMTA0OEMxMS40NDggMy40OTIzMSAxMC4yNjcyIDQuNzkxMTcgMTAuMjY3MiA3LjIyNjUyVjkuOTg2NloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" alt="facebook" className="share-icon"/>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzUyOTFfMTAwNTY1KSI+CjxwYXRoIGQ9Ik0xMiA0LjQ2NDg5QzE0LjY2NjcgNC40NjQ4OSAxNSA0LjQ2NDg5IDE2LjA4MzMgNC41NDgyM0MxOC44MzMzIDQuNjMxNTYgMjAuMDgzMyA1Ljk2NDg5IDIwLjE2NjcgOC42MzE1NkMyMC4yNSA5LjcxNDg5IDIwLjI1IDkuOTY0ODkgMjAuMjUgMTIuNjMxNkMyMC4yNSAxNS4yOTgzIDIwLjI1IDE1LjYzMTYgMjAuMTY2NyAxNi42MzE2QzIwLjA4MzMgMTkuMjk4MyAxOC43NSAyMC42MzE2IDE2LjA4MzMgMjAuNzE0OUMxNSAyMC43OTgzIDE0Ljc1IDIwLjc5ODMgMTIgMjAuNzk4M0M5LjMzMzMzIDIwLjc5ODMgOSAyMC43OTgzIDggMjAuNzE0OUM1LjI1IDIwLjYzMTYgNCAxOS4yOTgzIDMuOTE2NjcgMTYuNjMxNkMzLjgzMzMzIDE1LjU0ODMgMy44MzMzMyAxNS4yOTgzIDMuODMzMzMgMTIuNjMxNkMzLjgzMzMzIDkuOTY0ODkgMy44MzMzMyA5LjYzMTU2IDMuOTE2NjcgOC42MzE1NkM0IDUuOTY0ODkgNS4zMzMzMyA0LjYzMTU2IDggNC41NDgyM0M5IDQuNDY0ODkgOS4zMzMzMyA0LjQ2NDg5IDEyIDQuNDY0ODlaTTEyIDIuNjMxNTZDOS4yNSAyLjYzMTU2IDguOTE2NjcgMi42MzE1NiA3LjkxNjY3IDIuNzE0ODlDNC4yNSAyLjg4MTU2IDIuMjUgNC44ODE1NiAyLjA4MzMzIDguNTQ4MjNDMiA5LjU0ODIzIDIgOS44ODE1NiAyIDEyLjYzMTZDMiAxNS4zODE2IDIgMTUuNzE0OSAyLjA4MzMzIDE2LjcxNDlDMi4yNSAyMC4zODE2IDQuMjUgMjIuMzgxNiA3LjkxNjY3IDIyLjU0ODNDOC45MTY2NyAyMi42MzE2IDkuMjUgMjIuNjMxNiAxMiAyMi42MzE2QzE0Ljc1IDIyLjYzMTYgMTUuMDgzMyAyMi42MzE2IDE2LjA4MzMgMjIuNTQ4M0MxOS43NSAyMi4zODE2IDIxLjc1IDIwLjM4MTYgMjEuOTE2NyAxNi43MTQ5QzIyIDE1LjcxNDkgMjIgMTUuMzgxNiAyMiAxMi42MzE2QzIyIDkuODgxNTYgMjIgOS41NDgyMyAyMS45MTY3IDguNTQ4MjNDMjEuNzUgNC44ODE1NiAxOS43NSAyLjg4MTU2IDE2LjA4MzMgMi43MTQ4OUMxNS4wODMzIDIuNjMxNTYgMTQuNzUgMi42MzE1NiAxMiAyLjYzMTU2Wk0xMiA3LjQ2NDg5QzkuMTY2NjcgNy40NjQ4OSA2LjgzMzMzIDkuNzk4MjMgNi44MzMzMyAxMi42MzE2QzYuODMzMzMgMTUuNDY0OSA5LjE2NjY3IDE3Ljc5ODMgMTIgMTcuNzk4M0MxNC44MzMzIDE3Ljc5ODMgMTcuMTY2NyAxNS40NjQ5IDE3LjE2NjcgMTIuNjMxNkMxNy4xNjY3IDkuNzk4MjMgMTQuODMzMyA3LjQ2NDg5IDEyIDcuNDY0ODlaTTEyIDE1Ljk2NDlDMTAuMTY2NyAxNS45NjQ5IDguNjY2NjcgMTQuNDY0OSA4LjY2NjY3IDEyLjYzMTZDOC42NjY2NyAxMC43OTgyIDEwLjE2NjcgOS4yOTgyMyAxMiA5LjI5ODIzQzEzLjgzMzMgOS4yOTgyMyAxNS4zMzMzIDEwLjc5ODIgMTUuMzMzMyAxMi42MzE2QzE1LjMzMzMgMTQuNDY0OSAxMy44MzMzIDE1Ljk2NDkgMTIgMTUuOTY0OVpNMTcuMzMzMyA2LjEzMTU2QzE2LjY2NjcgNi4xMzE1NiAxNi4xNjY3IDYuNjMxNTYgMTYuMTY2NyA3LjI5ODIzQzE2LjE2NjcgNy45NjQ4OSAxNi42NjY3IDguNDY0ODkgMTcuMzMzMyA4LjQ2NDg5QzE4IDguNDY0ODkgMTguNSA3Ljk2NDg5IDE4LjUgNy4yOTgyM0MxOC41IDYuNjMxNTYgMTggNi4xMzE1NiAxNy4zMzMzIDYuMTMxNTZaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUyOTFfMTAwNTY1Ij4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyLjYzMTU2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="instragram" className="share-icon"/> 
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzUyOTFfMTAwNTcwKSI+CjxwYXRoIGQ9Ik01LjU4MzM0IDMuODA1NDdDNS41ODMzNCA1LjAyMjg2IDQuNTc1IDUuOTc5MzkgMy4yOTE2NiA1Ljk3OTM5QzIuMDA4MzMgNS45NzkzOSAxIDUuMDIyODYgMSAzLjgwNTQ3QzEgMi41ODgwOCAyLjAwODMzIDEuNjMxNTYgMy4yOTE2NiAxLjYzMTU2QzQuNTc1IDEuNjMxNTYgNS41ODMzNCAyLjU4ODA4IDUuNTgzMzQgMy44MDU0N1pNNS41ODMzNCA3LjcxODUySDFWMjEuNjMxNkg1LjU4MzM0VjcuNzE4NTJaTTEyLjkxNjYgNy43MTg1Mkg4LjMzMzM0VjIxLjYzMTZIMTIuOTE2NlYxNC4zMjczQzEyLjkxNjYgMTAuMjQwMyAxOC40MTY2IDkuODkyNDMgMTguNDE2NiAxNC4zMjczVjIxLjYzMTZIMjNWMTIuODQ5QzIzIDUuOTc5MzkgMTQuODQxNiA2LjI0MDI2IDEyLjkxNjYgOS42MzE1NlY3LjcxODUyWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF81MjkxXzEwMDU3MCI+CjxyZWN0IHdpZHRoPSIyMiIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMS42MzE1NikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" alt="in" className="share-icon"/>              
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjUzOTUgOC4xNDYwNUMyMi40MjA3IDcuNjkwNDYgMjIuMTc4OCA3LjI3MzA0IDIxLjgzODEgNi45MzU5NEMyMS40OTc1IDYuNTk4ODQgMjEuMDcwMyA2LjM1NCAyMC41OTk2IDYuMjI2MTVDMTguODc5NiA1LjgyMjk3IDEyIDUuODIyOTcgMTIgNS44MjI5N0MxMiA1LjgyMjk3IDUuMTIwMzYgNS44MjI5NyAzLjQwMDQ1IDYuMjY0NTRDMi45Mjk3MiA2LjM5MjQgMi41MDI0NyA2LjYzNzI0IDIuMTYxODYgNi45NzQzNEMxLjgyMTI0IDcuMzExNDQgMS41NzkzMyA3LjcyODg2IDEuNDYwNTUgOC4xODQ0NEMxLjE0NTc4IDkuODYwMDkgMC45OTE4MDggMTEuNTU5OSAxLjAwMDU3IDEzLjI2MjZDMC45ODkzNTEgMTQuOTc4MSAxLjE0MzMzIDE2LjY5MDkgMS40NjA1NSAxOC4zNzkxQzEuNTkxNSAxOC44MjA1IDEuODM4ODMgMTkuMjIyMSAyLjE3ODY1IDE5LjU0NUMyLjUxODQ3IDE5Ljg2NzggMi45MzkyOSAyMC4xMDExIDMuNDAwNDUgMjAuMjIyMkM1LjEyMDM2IDIwLjY2MzggMTIgMjAuNjYzOCAxMiAyMC42NjM4QzEyIDIwLjY2MzggMTguODc5NiAyMC42NjM4IDIwLjU5OTYgMjAuMjIyMkMyMS4wNzAzIDIwLjA5NDQgMjEuNDk3NSAxOS44NDk1IDIxLjgzODEgMTkuNTEyNEMyMi4xNzg4IDE5LjE3NTMgMjIuNDIwNyAxOC43NTc5IDIyLjUzOTUgMTguMzAyM0MyMi44NTE4IDE2LjYzOTMgMjMuMDA1OCAxNC45NTI0IDIyLjk5OTQgMTMuMjYyNkMyMy4wMTA3IDExLjU0NzEgMjIuODU2NyA5LjgzNDMxIDIyLjUzOTUgOC4xNDYwNVY4LjE0NjA1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjgyNTM4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuNzUgMTYuNDAxNkwxNS40OTk3IDEzLjI2MjZMOS43NSAxMC4xMjM2VjE2LjQwMTZaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuODI1MzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="youtube" className="share-icon"/>
                </div>
            </div>
            </div>
        
        <div  className="footer-right">
            <ul className="footer-right-a">
                <li>
                    <div className="footer-right-b">
                        <h5 className="footer-right-heading">About</h5>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                About Proaxiom
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                            Contact us
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Newsroom
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                               Careers
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Security
                            </span>
                        </a>
                    </div>
                </li>       
            </ul>
            <ul className="footer-right-a">
                <li>
                    <div className="footer-right-b">
                        <h5 className="footer-right-heading">Solutions</h5>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Customer Success
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                            Sales
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Recruiting
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                               Information Technology
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Markeking
                            </span>
                        </a>
                    </div>
                </li>       
            </ul>
            <ul className="footer-right-a">
                <li>
                    <div className="footer-right-b">
                        <h5 className="footer-right-heading">About</h5>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                               Popular Features
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                            Embed Proaxiom
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Availability
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                               Sending Notifications
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Using Proxiom Mobile
                            </span>
                        </a>
                    </div>
                </li>       
            </ul>
            <ul className="footer-right-a">
                <li>
                    <div className="footer-right-b">
                        <h5 className="footer-right-heading">Support</h5>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Help Center
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                            Vedio Tutorials
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Cookie Settings
                            </span>
                        </a>
                    </div>
                </li>
                </ul>
            <ul className="footer-right-a">
                <li>
                    <div className="footer-right-b">
                        <h5 className="footer-right-heading">Add-Ons</h5>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Download for Chrome 
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                            Download for Firefox
                            </span>
                        </a>
                    </div>
                </li>
                </ul>           
            <ul className="footer-right-a">
                <li>
                    <div className="footer-right-b">
                        <h5 className="footer-right-heading">About</h5>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                                Developers
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="footer-right-li-data">
                        <a style={{ cursor : "pointer" }}>
                            <span className="footer-right-li-data-a">
                            Developer Tools
                            </span>
                        </a>
                    </div>
                </li>
               </ul>
        </div>
        </div>
        <div className="copyright">
        <div className="start">
            <span className="start-a">Copyright Proaxiom 2023</span>
        </div>
        <div className="end-a">
        <span className="start-a">
            <a>
                Privacy
            </a>
            &nbsp;/&nbsp;
            <a>Terms and Conditions</a>
        </span>
        </div>
        </div>
</div>
    </section>
        
    </>)
}
export default Footer;