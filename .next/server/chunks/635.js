"use strict";
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(197);
;// CONCATENATED MODULE: ./components/layout/Header.js


function NavLink({ to , children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: to,
        className: `mx-4`,
        children: children
    }));
}
function MobileNav({ open , setOpen  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `absolute top-0 left-0 h-screen w-8/12 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-center filter drop-shadow-md bg-white h-20",
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "text-xl font-semibold",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/img/logo.png",
                            className: "object-scale-down logo-img-1"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col mobile-menu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        to: "/historique",
                        className: "lien",
                        children: "Historique"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        to: "/missions",
                        className: "lien",
                        children: "Missions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        to: "/services",
                        className: "lien",
                        children: "Services"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                        to: "/metiers",
                        className: "lien",
                        children: "Metiers"
                    })
                ]
            })
        ]
    }));
}
const Header = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex filter bg-white py-2 h-20 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                open: open,
                setOpen: setOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-3/12 flex items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-2xl font-semibold",
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/img/logo.png",
                        className: "object-scale-down logo-img"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-9/12 flex justify-end items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden",
                        onClick: ()=>{
                            setOpen(!open);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden md:flex menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                to: "/historique",
                                className: "lien",
                                children: "Historique"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                to: "/missions",
                                className: "lien",
                                children: "Missions"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                to: "/services",
                                className: "lien",
                                children: "Services"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                to: "/metiers",
                                className: "lien",
                                children: "Metiers"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/Footer.js




const Footer = ()=>{
    const { 0: showButton , 1: setShowButton  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
    // This function will scroll the window to the top 
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: "primary-footer",
                allowFullScreen: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "primary-footer-area container-fluid",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row primary-footer__links justify-content-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "primary-footer__copyright",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "row justify-content-center horraires",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                            icon: "clock"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "col-10",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: "Lundi au Vendredi"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "8h00 \xe0 12h00 - 13h30 \xe0 17h30"
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "primary-footer__sociale"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row mt-5 primary-footer__company justify-content-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-3 text-light logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "footer-img",
                                            src: "/img/logo2.png",
                                            alt: "",
                                            height: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-5 mt-3 diayante",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            className: "titrefooter text-light",
                                            children: "\xa0 DIAYANTE  \xa0 BA \xa0 NAW"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-4 mt-3 text-light",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "primary-footer__address",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "row justify-content-right",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "reseau",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "facebook",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "",
                                                                    className: "item-top-nav-right",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                        icon: [
                                                                            'fab',
                                                                            'facebook'
                                                                        ]
                                                                    })
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "instagram",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "",
                                                                    className: "item-top-nav-right",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                        icon: [
                                                                            'fab',
                                                                            'instagram'
                                                                        ]
                                                                    })
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "twitter",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "",
                                                                    className: "item-top-nav-right",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                        icon: [
                                                                            'fab',
                                                                            'twitter'
                                                                        ]
                                                                    })
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: "linkedin",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "",
                                                                    className: "item-top-nav-right",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                        icon: [
                                                                            'fab',
                                                                            'linkedin'
                                                                        ]
                                                                    })
                                                                }),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "map",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-map-marked-alt text-light"
                                                }),
                                                "Dakar(S\xe9n\xe9gal), Hann Maristes I Villa num\xe9ro B 113"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15434.28014045236!2d-17.425203!3d14.7368843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x494168c5dd93026e!2sVOCASARA!5e0!3m2!1sfr!2ssn!4v1642714901261!5m2!1sfr!2ssn",
                                            allowFullScreen: true,
                                            loading: "lazy"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "footer-section",
                                class: "text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "row justify-content-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            class: "col-sm-8 col-sm-offset-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                class: "copyright",
                                                children: [
                                                    "\xa9 2022 VOCASARA - Created By ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        children: "Dahibou KA"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "area",
                        allowFullScreen: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "circles",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {})
                            ]
                        })
                    })
                ]
            }),
            showButton && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: scrollToTop,
                className: "back-to-top",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                    icon: "chevron-up"
                })
            })
        ]
    }));
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/Layout.js







const Layout = ({ children , title ='Volantis - Inspection par drone'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "text/javascript",
                        src: "/static/jquery.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "text/javascript",
                        src: "/static/debut.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        rel: "stylesheet",
                        href: "/static/animate.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    }));
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;