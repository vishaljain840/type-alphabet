(this.webpackJsonpalphabet = this.webpackJsonpalphabet || []).push([
    [0], {
        10: function(e, t, a) {
            e.exports = a(17)
        },
        15: function(e, t, a) {},
        16: function(e, t, a) {},
        17: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                s = a.n(n),
                r = a(3),
                i = a.n(r),
                l = (a(15), a(16), a(4)),
                o = a(5),
                u = a(6),
                c = a(8),
                m = a(7),
                h = a(1),
                p = a(9),
                d = function(e) {
                    var t = e.currentLetter;
                    return s.a.createElement("p", {
                        className: "next-letter"
                    }, t.toUpperCase())
                },
                g = function(e) {
                    e.runningTime;
                    var t = e.letterSplits,
                        a = Object.keys(t).map((function(e) {
                            return s.a.createElement("li", {
                                key: e
                            }, s.a.createElement("span", {
                                className: "char"
                            }, e, ":"), " ", t[e], "s")
                        }));
                    return s.a.createElement("div", {
                        className: "results"
                    }, s.a.createElement("p", null, "Detailed Results ", s.a.createElement("span", {
                        role: "img",
                        "aria-label": "flag"
                    }, "\ud83c\udfc1")), s.a.createElement("ul", null, a))
                },
                f = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(m.a)(t).call(this, e))).state = {
                            input: "",
                            letters: "abcdefghijklmnopqrstuvwxyz",
                            gameStarted: !1,
                            runningTime: 0,
                            startTime: null,
                            intervalId: null,
                            letterSplits: {},
                            won: !1
                        }, a.handleInput = a.handleInput.bind(Object(h.a)(a)), a.handleReset = a.handleReset.bind(Object(h.a)(a)), a
                    }
                    return Object(p.a)(t, e), Object(u.a)(t, [{
                        key: "handleStart",
                        value: function() {
                            this.setState({
                                gameStarted: !0,
                                startTime: Date.now(),
                                won: !1
                            }), this.timer()
                        }
                    }, {
                        key: "handleInput",
                        value: function(e) {
                            this.state.gameStarted || this.handleStart();
                            var t = this.state.input.length,
                                a = e.target.value[e.target.value.length - 1];
                            e.target.value.toLowerCase() === this.state.letters.slice(0, t + 1) && (this.setState({
                                input: e.target.value.toLowerCase()
                            }), this.handleSplit(a)), e.target.value.toLowerCase() === this.state.letters && this.handleWin()
                        }
                    }, {
                        key: "handleReset",
                        value: function(e) {
                            e.preventDefault(), this.setState({
                                input: "",
                                gameStarted: !1,
                                runningTime: 0,
                                startTime: null,
                                intervalId: null,
                                won: !1
                            }), this.resetTimer()
                        }
                    }, {
                        key: "handleWin",
                        value: function() {
                            this.resetTimer(), this.setState({
                                won: !0
                            })
                        }
                    }, {
                        key: "nextLetter",
                        value: function() {
                            var e = this.state.input.length;
                            return this.state.letters[e]
                        }
                    }, {
                        key: "handleSplit",
                        value: function(e) {
                            this.setState({
                                letterSplits: Object.assign({}, this.state.letterSplits, Object(l.a)({}, e.toLowerCase(), (this.state.runningTime / 1e3).toFixed(3)))
                            })
                        }
                    }, {
                        key: "timer",
                        value: function() {
                            var e = this;
                            this.setState({
                                intervalId: setInterval((function() {
                                    e.setState({
                                        runningTime: Date.now() - e.state.startTime
                                    })
                                }), 1)
                            })
                        }
                    }, {
                        key: "resetTimer",
                        value: function() {
                            clearInterval(this.state.intervalId), document.getElementById("game-form-input").focus()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return s.a.createElement("section", {
                                className: "game"
                            }, s.a.createElement("h1", null, "Type The Alphabet"), s.a.createElement("h2", null, "Typing game to see how fast you type. Timer starts when you do :)"), s.a.createElement("section", {
                                className: "status",
                                key: this.state.input,
                                onClick: function() {
                                    return document.getElementById("game-form-input").focus()
                                }
                            }, this.nextLetter() ? s.a.createElement(d, {
                                currentLetter: this.nextLetter()
                            }) : s.a.createElement("p", {
                                className: "winning-message"
                            }, "Success!")), s.a.createElement("form", {
                                className: "game-form",
                                onSubmit: this.handleReset,
                                autoComplete: "off",
                                autoCapitalize: "off",
                                autoCorrect: "off"
                            }, s.a.createElement("input", {
                                id: "game-form-input",
                                type: "text",
                                value: this.state.input,
                                onChange: this.handleInput,
                                onPaste: this.handleReset,
                                placeholder: "Type here. Pro tip: Press enter to restart",
                                autoFocus: !0
                            }), s.a.createElement("input", {
                                type: "submit",
                                value: "Reset"
                            })), s.a.createElement("p", {
                                className: "time-elapsed"
                            }, "Time: ", (this.state.runningTime / 1e3).toFixed(3), "s"), this.state.won && s.a.createElement(g, {
                                runningTime: this.state.runningTime,
                                letterSplits: this.state.letterSplits
                            }), s.a.createElement("p", {
                                className: "matt"
                            }, "created by ", s.a.createElement("a", {
                                href: "https://twitter.com/mttrms",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "@mttrms"), " \u2013 my best time: 1.39s!"))
                        }
                    }]), t
                }(s.a.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(s.a.createElement(f, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        }
    },
    [
        [10, 1, 2]
    ]
]);
//# sourceMappingURL=main.3321d684.chunk.js.map