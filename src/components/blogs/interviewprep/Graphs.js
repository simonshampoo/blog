import React from "react";
import logo from "../assets/graphs.gif";
import SyntaxHighlighter from "react-syntax-highlighter";
import "../styles/Graphs.css";
import CytoscapeComponent from "react-cytoscapejs";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import cytoscape from "cytoscape";

const Graph = () => {
  const elements = [
    // nodes
    { data: { id: "a", label: "Alice" }, position: { x: 350, y: 350 } },
    { data: { id: "b", label: "Bob" }, position: { x: 400, y: 100 } },
    { data: { id: "c", label: "Carl" }, position: { x: 90, y: 500 } },
    { data: { id: "d", label: "Danny" }, position: { x: 550, y: 500 } },
    { data: { id: "e", label: "Emma" }, position: { x: 150, y: 100 } },
    // edges
    {
      data: {
        id: "ab",
        source: "a",
        target: "b",
      },
    },
    {
      data: {
        id: "cd",
        source: "c",
        target: "d",
      },
    },
    {
      data: {
        id: "ac",
        source: "a",
        target: "c",
      },
    },
    {
      data: {
        id: "be",
        source: "b",
        target: "e",
      },
    },
    {
      data: {
        id: "ce",
        source: "c",
        target: "e",
      },
    },
  ];

  return (
    <CytoscapeComponent
      zoomingEnabled={false}
      elements={elements}
      style={{
        "border-style": "solid",
        "border-width": 2,
        "border-color": "black",
        margin: "auto",
        height: "600px",
        width: "800px",
      }}
    />
  );
};

const Graphs = () => {
  return (
    <div>
      <h1>Graph Introduction</h1>
      <div className="introduction">
        According to Wikipedia, a graph is "a structure amounting to a set of
        objects in which some pairs of the objects are in some sense "related".
        The objects correspond to mathematical abstractions called vertices
        (also called nodes or points) and each of the related pairs of vertices
        is called an edge (also called link or line).[1] Typically, a graph is
        depicted in diagrammatic form as a set of dots or circles for the
        vertices, joined by lines or curves for the edges. Graphs are one of the
        objects of study in discrete mathematics.
        <img className="graphPictures" src={logo} alt="graphs" />
        <p className="pictureText">Some examples of famous graphs</p>
        <p>
          But that is quite an ugly definition. To put it in layman's terms, a
          graph is a pairing of a set of "things" (
          <strong>
            <i>nodes</i>
          </strong>{" "}
          or{" "}
          <strong>
            <i>vertices</i>
          </strong>
          ), with each "thing" having some, or none, connections (
          <strong>
            <i>edges</i>
          </strong>
          ) to other "thing"(s) (which again, are <i>nodes</i>). What are these
          connections (again, <i>edges</i>)? Well, it matters in the context of
          the problem, we will see what this means soon.
        </p>
        <h1>Important topics to go over</h1>
        <h4>Types of graphs (Section 0)</h4>
        <h4>Graph implementations (Section 1)</h4>
        <h4>Graph traversals (DFS, BFS) (Section 2)</h4>
        <h4>Topological Sort (Section 3)</h4>
        <h4>Various famous graph algorithms (Section 4)</h4>
        <h1>Section 0: Types of Graphs</h1>
      </div>

      <div className="section00part1">
        <h3>Undirected Graphs (0.0)</h3>
        Let's start with an example first before we get formal. We can use a
        graph to represent friendships, where each node represents a person and
        each edge represents a friendship. Friendships are mutual, so if Alice
        is friends with Bob, then Bob is friends with Alice. This is VERY
        important because it tells us what this type of graph is, and note will
        not always be the case.
        <br />
        <br /> Because of this mutality, this is an undirected graph, meaning
        that the edges have no directions, and hence, there exists a path from
        <pre>
          <code>Node A &lt;--&gt; Node B</code>.
        </pre>
        We will see later what happens when we implement "directions" in our
        graph. For now, consider this graph.
      </div>

      <Graph className="example-graph" />

      <div className="section00part2">
        As we can see, Alice, Bob, Carl, and Emma are nodes or vertices{" "}
        <i>
          (I will be using "vertices" from here on out, but they mean the same
          thing)
        </i>
        , and are all friends with each other because they all have edges
        conneting each other. However, Danny, another node, is only friends with
        Carl. This is quite sad considering when we are given a graph, the edges
        and nodes never really change. We can only hope in a future problem that
        Danny is introduced to Carl's group of friends.
        <br />
        <br />
        Note however, that if Danny wanted to relay a message to Bob, Danny
        cannot directly contact Bob. Instead, he can tell Carl to relay Bob the
        message. There exists an (indirect) path from Danny to Bob. Finding
        paths between two nodes is an incredibly important and a common theme in
        graph problems.
        <br />
        <br />
        <div className="stupidLatex">
          Mathematically speaking, a graph
          <Latex className="formalDef">
            {
              " $G$ is a pair such that $G = (V, E)$ where $V$ is the set of vertices and $E$ is the set of edges. In our example above,<br/> $V =$ {$Alice, Bob, Carl, Danny, Emma$} and <br/> $E = $ {$(Alice, Bob), (Alice, Carl), (Bob, Emma), (Carl, Emma), (Carl, Danny)$}."
            }
          </Latex>
        </div>
        <br />
        Suppose we introduced a new person, Freddy, who doesn't know any of our
        friends, Alice, Bob, Carl, Danny, or Emma. Freddy would be a{" "}
        <strong>
          <i>component </i>
        </strong>
        of the graph, and there would be no path from Freddy to any of our
        previously mentioned friends. Alice, Bob, Carl, Danny, and Emma are one
        component of the graph, and Freddy is another, meaning there would be
        two total components to our graph.
        <p className="summary">
          Takeaway:
          <br />
          <ul>
            <li>
              A graph is a visual representation of a pair containing a set of
              nodes (called "vertices") and a set of edges.
            </li>
            <li>
              {" "}
              In an undirected graph, there can exist an indirect or direct path
              from <code>Node A &lt;--&gt; Node B</code>, but sometimes none at
              all.
            </li>
          </ul>
        </p>
      </div>

      <div className="section01part1">
        <h3>Directed Graphs (0.1)</h3>
        <p style={{ color: "red" }}>
          For some reason I can't seem to get a directed graph working in
          cytoscape. I need to fix and add this part.
        </p>
      </div>

      <CytoscapeComponent
        elements={[
          { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
          { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
          {
            data: {
              source: "one",
              target: "two",
              label: "Edge from Node1 to Node2",
            },
          },
        ]}
        layout={{
          name: "breadthfirst",
          directed: true,
        }}
        style={{
          margin: "auto",
          height: "600px",
          width: "800px",
        }}
      />
      <div className="section1">
        <h1 className="section1">
          <strong>Section 1: </strong>Graph Implementations
        </h1>
        <p>Note however, that if Danny wanted to relay a message to Bob, Danny cannot directly contact Bob. Instead, he can tell Carl to relay Bob the message. There exists an (indirect) path from Danny to Bob. Finding paths between two nodes is an incredibly important and a common theme in graph problems.</p>
      </div>
      <h1>Graph Traversals 0.1: Depth-First Search</h1>
      <div className="psuedocodeDFS">
        <SyntaxHighlighter language="python">
          {`\n     class DFS:
            n = number of nodes in the graph
            g = adjacency list representing graph
            visited = [false, ..., false] #size n
            def dfs(at):
              if (visited[at]): 
                return
              visited[at] = True
              neighbors = graph[at]
              for next in neighbors:
                dfs(next)
            # start dfs at node zero
            start_node = 0
            dfs(start_node)`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Graphs;
