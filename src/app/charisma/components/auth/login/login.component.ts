import {Component, OnInit} from '@angular/core';
import {LayoutService } from 'src/app/layout/service/app.layout.service';
import {UserService} from "../../../service/user.service";
import {UserAuthService} from "../../../service/user-auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {accountUser} from "../../../api/accountUser";

@Component({
    selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
model: accountUser=new accountUser();
	rememberMe: boolean = false;

	constructor(private layoutService: LayoutService,
                private userService: UserService,
                private userAuthService: UserAuthService,
                private router: Router
    ) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

    ngOnInit(): void {
    }
    login(model:NgForm) {
        this.userService.login(this.model).subscribe(
            (response: any) => {

                this.userAuthService.setRoles(response.user.role);
                this.userAuthService.setToken(response.jwtToken);
                const role = response.user.role[0].roleName;

                if (role === 'Admin') {
                    console.log("Role burada ADMIN");
                    this.router.navigate(['/../apps/calendar']);
                } else {
                    this.router.navigate(['/ecommerce/product-list']);
                }
            },
            (error) => {
                console.log(error);
            }

        );


    }

    registerUser() {
        this.router.navigate(['/auth/register']);
    }

}
