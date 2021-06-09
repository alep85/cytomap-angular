import { Component, OnInit } from '@angular/core';
import { graphData } from './graph.data';
import * as cytoscape from 'cytoscape';
import { graphStyle } from './graph.style';

declare var mapboxgl: any;
declare var CytoscapeMapbox: any;

@Component({
  selector: 'app-mapbox-graph',
  templateUrl: './mapbox-graph.component.html',
  styleUrls: ['./mapbox-graph.component.scss'],
})
export class MapboxGraphComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    cytoscape.use(CytoscapeMapbox);

    const cy = cytoscape({
      container: document.getElementById('cy'),
      elements: graphData,
      style: graphStyle,
    }) as any;

    cy.autoungrabify(true); // disable node dragging
    const cyMap = cy.mapboxgl(
      {
        container: document.getElementById('cy'),
        accessToken: '', // mapbox access token is required
        style: 'mapbox://styles/mapbox/streets-v11',
      },
      {
        getPosition: (node: any) => {
          return [node.data('lng'), node.data('lat')];
        },
      }
    );
    cyMap.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  }
}
