import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

constructor() { }

public static API_URL = "https://localhost:44314";

}
