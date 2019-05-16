import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";
import { AuthService } from "../providers/auth.service";
import { ITnsOAuthTokenResult } from "nativescript-oauth2";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private authService:AuthService,private page: Page, private userService: UserService, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    public onTapLogin() {
        this.authService.tnsOauthLogin("facebook")
            .then((result: ITnsOAuthTokenResult) => {
             // console.log("back to login component with token " + result.accessToken);
              this.routerExtensions
                  .navigate(["./home"])
                  .then(() => console.log("navigated to ./item-detail"))
                  .catch(err => console.log("error navigating to /item-detail: " + err));
            })
            .catch(e => console.log("Error: " + e));
            
    }



    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Ingrese un correo y una contraseña.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.userService.login(this.user)
            .then(() => {
                this.processing = false;
                this.routerExtensions.navigate(["/home"], { clearHistory: true });
            })
            .catch(() => {
                this.processing = false;
                this.alert("Lamentablemente no escontramos su cuenta.");
            });
    }

    register() {
        if (this.user.password != this.user.confirmPassword) {
            this.alert("Su contraseña no es igual.");
            return;
        }
        this.userService.register(this.user)
            .then(() => {
                this.processing = false;
                this.alert("Cuenta creado correctamente.");
                this.isLoggingIn = true;
            })
            .catch(() => {
                this.processing = false;
                this.alert("Desafortunadamente no pudimos crear su cuenta.");
            });
    }

    forgotPassword() {
        prompt({
            title: "Cambio de Contraseña",
            message: "Ingrese su correo registrado para resetear su contraseña.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Aceptar",
            cancelButtonText: "Cancelar"
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Contraseña cambiada. Revise su correo");
                    }).catch(() => {
                        this.alert("Desafortunadamente ocurrió un error al cambiar la contraseña.");
                    });
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "MI AGENDA",
            okButtonText: "Aceptar",
            message: message
        });
    }
}

