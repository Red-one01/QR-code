export class Country {

  constructor(private country_name: string,
    private country_code: string,
    private country_flag: string) {
  }

  getCountry_name(): string {
    return this.country_name;
  }

  getCountry_code(): string {
    return this.country_code;
  }

  getCountry_flag(): string {
    return this.country_flag;
  }
  
}