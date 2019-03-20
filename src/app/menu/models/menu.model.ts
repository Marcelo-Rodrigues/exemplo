export class Menu {
  public descricao: string;
  public link: string;

  constructor(menu: Menu) {
    Object.assign(this, menu);
  }

  public get tooltip() {
    return `Menu da página ${this.descricao}`;
  }
}
