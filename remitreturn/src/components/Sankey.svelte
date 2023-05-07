<script>
    import * as d3 from "d3";
    export let name = "World";
    export let index;

    let isVisible = false;

    $: if (index == 1) {
        isVisible = true;
    } else {
        isVisible = false;
    }
</script>

<div class="sankey" class:visible={isVisible}>
    <!-- <!DOCTYPE html> -->

    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <!-- <title>Sankey Particles</title> -->
            <!-- <title>Sankey Particles</title> -->
            <style>
                .node rect {
                    cursor: move;
                    fill-opacity: 0.9;
                    shape-rendering: crispEdges;
                }
                .node text {
                    pointer-events: none;
                    text-shadow: 0 1px 0 #fff;
                }
                .link {
                    fill: none;
                    stroke: burlywood;
                    stroke-opacity: 0.2;
                }
                .link:hover {
                    fill: red;
                    stroke: red;
                    stroke-opacity: 1000;
                }
                svg {
                    position: relative; 
                    text-anchor: middle;
                }
                canvas {
                    position: absolute;
                    visibility: visible;
                }
            </style>
        </head>
        <body>
            <!-- <p style="text-align:center;"><b>Sankey Diagram</b></p> -->

            <div class="sidebar">
                <p style="float: left;">Original Occupation</p>
                <p style="float: right;">US Occupation</p>
            </div>
            <p id="sankey">
                <canvas width="700" height="1100" />
                <svg width="700" height="1000" />

                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js"
                    charset="utf-8"
                    type="text/javascript"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/sankey.js"
                ></script>

                <script type="text/javascript">
                    var margin = { top: 1, right: 1, bottom: 10, left: 1 },
                        width = 550 - margin.left - margin.right,
                        height = 500 - margin.top - margin.bottom;
                    var formatNumber = d3.format(",.0f"),
                        format = function (d) {
                            return formatNumber(d);
                        },
                        color = d3.scale.category20();
                    var svg = d3
                        .select("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr(
                            "transform",
                            "translate(" + margin.left + "," + margin.top + ")"
                        );
                    var sankey = d3
                        .sankey()
                        .nodeWidth(15)
                        .nodePadding(10)
                        .size([width, height]);
                    var path = sankey.link();
                    var freqCounter = 1;
                    d3.json(
                        "https://raw.githubusercontent.com/mercerb/remit-return/sankey/remitreturn/src/data/sankey.json",
                        function (energy) {
                            sankey
                                .nodes(energy.nodes)
                                .links(energy.links)
                                .layout(32);
                            var link = svg
                                .append("g")
                                .selectAll(".link")
                                .data(energy.links)
                                .attr("fill", "yellow")
                                .enter()
                                .append("path")
                                .attr("class", "link")
                                .attr("opacity", 0.1)
                                .attr("d", path)

                                .style("stroke-width", function (d) {
                                    return Math.max(1, d.dy);
                                })
                                .sort(function (a, b) {
                                    return b.dy - a.dy;
                                });

                            link.append("title").text(function (d) {
                                return (
                                    d.source.name +
                                    " → " +
                                    d.target.name +
                                    "\n" +
                                    format(d.value)
                                );
                            });
                            var node = svg
                                .append("g")
                                .selectAll(".node")
                                .data(energy.nodes)
                                .enter()
                                .append("g")
                                .attr("class", "node")
                                .attr("transform", function (d) {
                                    return "translate(" + d.x + "," + d.y + ")";
                                })
                                .call(
                                    d3.behavior
                                        .drag()
                                        .origin(function (d) {
                                            return d;
                                        })
                                        .on("dragstart", function () {
                                            this.parentNode.appendChild(this);
                                        })
                                        .on("drag", dragmove)
                                );
                            node.append("rect")
                                .attr("height", function (d) {
                                    return d.dy;
                                })
                                .attr("width", sankey.nodeWidth())
                                .style("fill", function (d) {
                                    return (d.color = color(
                                        d.name.replace(/ .*/, "")
                                    ));
                                })
                                .style("stroke", "none")
                                .append("title")
                                .text(function (d) {
                                    return d.name + "\n" + format(d.value);
                                });
                            node.on("mouseover", function (d) {
                                link.transition()
                                    .duration(300)
                                    .style("stroke-opacity", function (l) {
                                        return l.source === d || l.target === d
                                            ? 1
                                            : 0.2;
                                    });
                            }).on("mouseleave", function (d) {
                                link.transition()
                                    .duration(300)
                                    .style("stroke-opacity", 0.2);
                            });
                            node.append("text")
                                .attr("x", -6)
                                .attr("y", function (d) {
                                    return d.dy / 2;
                                })
                                .attr("dy", ".35em")
                                .attr("text-anchor", "end")
                                .attr("transform", null)
                                .text(function (d) {
                                    return d.name;
                                })
                                .filter(function (d) {
                                    return d.x < width / 2;
                                })
                                .attr("x", 6 + sankey.nodeWidth())
                                .attr("text-anchor", "start");
                            function dragmove(d) {
                                d3.select(this).attr(
                                    "transform",
                                    "translate(" +
                                        d.x +
                                        "," +
                                        (d.y = Math.max(
                                            0,
                                            Math.min(height - d.dy, d3.event.y)
                                        )) +
                                        ")"
                                );
                                sankey.relayout();
                                link.attr("d", path);
                            }

                            var linkExtent = d3.extent(
                                energy.links,
                                function (d) {
                                    return d.value;
                                }
                            );
                            var frequencyScale = d3.scale
                                .linear()
                                .domain(linkExtent)
                                .range([0.05, 1]);
                            var particleSize = d3.scale
                                .linear()
                                .domain(linkExtent)
                                .range([1, 5]);
                            energy.links.forEach(function (link) {
                                link.freq = frequencyScale(link.value);
                                link.particleSize = 1;
                                link.color = d3.scale
                                    .linear()
                                    .domain([0, 1])
                                    .range([
                                        link.source.color,
                                        link.target.color,
                                    ]);
                                link.particleColor = d3.scale
                                    .linear()
                                    .domain([0, 1])
                                    .range([
                                        link.source.color,
                                        link.target.color,
                                    ]);
                            });
                            var t = d3.timer(tick, 50);
                            var particles = [];
                            function tick(elapsed, time) {
                                particles = particles.filter(function (d) {
                                    return d.current < d.path.getTotalLength();
                                });
                                d3.selectAll("path.link").each(function (d) {
                                    for (var x = 0; x < 2; x++) {
                                        var offset =
                                            (Math.random() - 0.5) * (d.dy - 4);
                                        if (Math.random() < d.freq) {
                                            var length = this.getTotalLength();
                                            particles.push({
                                                link: d,
                                                time: elapsed,
                                                offset: offset,
                                                path: this,
                                                length: length,
                                                animateTime: length,
                                                speed: 0.5 + Math.random(),
                                            });
                                        }
                                    }
                                });
                                particleEdgeCanvasPath(elapsed);
                            }
                            function particleEdgeCanvasPath(elapsed) {
                                var context = d3
                                    .select("canvas")
                                    .node()
                                    .getContext("2d");
                                context.clearRect(0, 0, 1000, 1000);
                                context.fillStyle = "gray";
                                context.lineWidth = "1px";
                                for (var x in particles) {
                                    var currentTime =
                                        elapsed - particles[x].time;
                                    particles[x].current =
                                        currentTime * 0.15 * particles[x].speed;
                                    var currentPos = particles[
                                        x
                                    ].path.getPointAtLength(
                                        particles[x].current
                                    );
                                    context.beginPath();
                                    context.fillStyle =
                                        particles[x].link.particleColor(0);
                                    context.arc(
                                        currentPos.x,
                                        currentPos.y + particles[x].offset,
                                        particles[x].link.particleSize,
                                        0,
                                        2 * Math.PI
                                    );
                                    context.fill();
                                }
                            }
                        }
                    );
                    function highlight_node_links(node, i) {
                        var remainingNodes = [],
                            nextNodes = [];
                        var stroke_opacity = 0;
                        if (d3.select(this).attr("data-clicked") == "1") {
                            d3.select(this).attr("data-clicked", "0");
                            stroke_opacity = 0.2;
                        } else {
                            d3.select(this).attr("data-clicked", "1");
                            stroke_opacity = 0.5;
                        }
                        var traverse = [
                            {
                                linkType: "sourceLinks",
                                nodeType: "target",
                            },
                            {
                                linkType: "targetLinks",
                                nodeType: "source",
                            },
                        ];
                        traverse.forEach(function (step) {
                            node[step.linkType].forEach(function (link) {
                                remainingNodes.push(link[step.nodeType]);
                                highlight_link(link.id, stroke_opacity);
                            });
                            while (remainingNodes.length) {
                                nextNodes = [];
                                remainingNodes.forEach(function (node) {
                                    node[step.linkType].forEach(function (
                                        link
                                    ) {
                                        nextNodes.push(link[step.nodeType]);
                                        highlight_link(link.id, stroke_opacity);
                                    });
                                });
                                remainingNodes = nextNodes;
                            }
                        });
                    }
                    function highlight_link(id, opacity) {
                        d3.select("#link-" + id).style(
                            "stroke-opacity",
                            opacity
                        );
                    }
                </script>
            </p></body
        >
    </html>
</div>
