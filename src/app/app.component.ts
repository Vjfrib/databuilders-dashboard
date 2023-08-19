import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    { title: 'Notificações', url: '/notes', icon: 'mail' },
    { title: 'Orçamento', url: '/buldge', icon: 'wallet' },
    { title: 'Dashboards', url: '/dashboard', icon: 'analytics' },
    
    { title: 'Cronograma', url: '/timer', icon: 'archive' },
  ];
  public labels = ['Funcionarios', 'Clientes'];
  public options = [  { title: 'Sair', url: '', icon: 'warning' },]
  constructor() {}

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        page => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  refreshing(event: any) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
}
