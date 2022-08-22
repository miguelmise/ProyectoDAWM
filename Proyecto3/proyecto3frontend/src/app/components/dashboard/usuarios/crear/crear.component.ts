import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/interfaces/modelo';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  marcas: any[] = [
    {value: 'mazda', viewValue: 'mazda'},
    {value: 'chevy', viewValue: 'chevy'},
    {value: 'toyota', viewValue: 'toyota'}
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder, private _modeloService:ModeloService, private router:Router,private _snackBar: MatSnackBar) {
    this.form = fb.group({
      marca:['',Validators.required],
      modelo:['',Validators.required],
      precio:['',Validators.required],
      fecha:['',Validators.required]

    })
   }

  ngOnInit(): void {
  }

  agregarModelo(){
    console.log(this.form);
    const modelo: Modelo = {
      marca: this.form.value.marca,
      modelo: this.form.value.modelo,
      precio: this.form.value.precio,
      fecha: this.form.value.fecha
    }
    console.log(modelo);
    this._modeloService.agregarModelo(modelo);
    this.router.navigate(['/dashboard/modelos'])
    this._snackBar.open('Modelo Agregado','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
