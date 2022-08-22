import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

    //FormBuilder para formulario y MatSnackBar para mensaje de error son importados
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    //se crea el las variables del formulario
    this.form = this.fb.group({
      usuario: [ '',Validators.required ],
      password: [ '',Validators.required ]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    
    //atrapamos los valores del formulario
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario != '' && password != ''){
      //llamada funcion cargando redirecciono
      this.cargando();
    }else{
      //llamada metodo mensaje error
      this.error();
      //reseteo el formulario
      this.form.reset();
    }

  }

  //muestra mensaje cuando escriben mal la clave
  error(){
    this._snackBar.open('Usuario o Password invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  cargando(){
    this.loading = true;
    setTimeout(()=>{
      //aqui se redirecciona al dashboard
      this.router.navigate(['dashboard'])
    },1500);
  }

}
