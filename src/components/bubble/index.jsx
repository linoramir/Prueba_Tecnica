import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "d3-scale-chromatic";

const Bubble = ({ criptoList }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    const width = window.innerWidth * 0.74;
    const height = window.innerHeight * 0.75;

    if (d3Container.current) {
      d3.select(d3Container.current).selectAll("*").remove();

      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const data = criptoList.slice(0, 49);
      console.log("bubble", { data });
      const color = d3
        .scaleOrdinal()
        .domain(["positivo", "negativo"])
        .range(["#295840", "#84373D"]);

      const size = d3.scaleLinear().domain([0, 25]).range([60, 130]);

      const Tooltip = d3
        .select(d3Container.current)
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip");

      const mouseover = function () {
        Tooltip.style("opacity", 1);
      };
      const mousemove = function (event, d) {
        Tooltip.html()
          .style("left", event.pageX + 20 + "px")
          .style("top", event.pageY - 30 + "px");
      };
      const mouseleave = function () {
        Tooltip.style("opacity", 0);
      };

      const node = svg
        .append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${width / 2},${height / 2})`)
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

      node
        .append("circle")
        .attr("r", (d) => size(d.value))
        .style("fill", (d) => color(d.tendencia))
        .style("fill-opacity", 0.8)
        .attr("stroke", "black")
        .style("stroke-width", 1);

      node
        .append("image")
        .attr("xlink:href", (d) => d.image)
        .attr("x", (d) => -size(d.value) / 2)
        .attr("y", (d) => -size(d.value) * 0.7)
        .attr("width", (d) => size(d.value))
        .attr("height", (d) => size(d.value) * 0.6)
        .attr("clip-path", (d) => `circle(${size(d.value) / 2}px)`);

      node

        .append("text")
        .text((d) => d.key)
        .attr("text-anchor", "middle")
        .attr("dy", ".5em")
        .style("fill", "white");

      node
        .append("text")
        .attr("y", (d) => size(d.value) * 0.75)
        .attr("text-anchor", "middle")
        .text(
          (d) =>
            `${d.tendencia === "negativo" ? "-" : ""}${d.value.toFixed(2)}%`
        )
        .style(
          "fill",
          (d) => `${d.tendencia === "negativo" ? "#EB8485" : "#418A59"}`
        );

      const simulation = d3
        .forceSimulation()
        .force(
          "center",
          d3
            .forceCenter()
            .x(width / 2)
            .y(height / 2)
        )
        .force("charge", d3.forceManyBody().strength(140))
        .force(
          "collide",
          d3
            .forceCollide()
            .strength(0.5)
            .radius((d) => size(d.value) + 3)
            .iterations(1)
        );

      simulation.nodes(data).on("tick", () => {
        node.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });

      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.03).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0.03);
        d.fx = null;
        d.fy = null;
        simulation
          .force("attract", d3.forceManyBody().strength(10))
          .alpha(1)
          .restart();
      }
    }
  }, [criptoList]);

  return <div id="my_dataviz" ref={d3Container}></div>;
};

export default Bubble;
