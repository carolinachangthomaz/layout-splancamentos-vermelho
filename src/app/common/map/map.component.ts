import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  isPositionError: boolean = false;

  lat: number;
  lng: number;

  constructor(private mapService: MapService) { }

  mapReadyHandler() {
    this.mapService.getGeoLocation('São Paulo , Rua Vieira de Morais nº 79').subscribe(
      (coordinates) => {
         this.lat = coordinates.lat;
         this.lng = coordinates.lng;

        // this.ref.detectChanges();
      }, () => {
        this.isPositionError = true;
      }
    )
  }

}
