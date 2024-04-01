export default class UserModel implements IUser {
  public id = '';
  public name: string | null = null;
  public email: string | null = null;
  public age: string | null = null;
  public image: string | null = null;
  public phone: string | null = null;
  public address: string | null = null;
  public country: string | null =  null;
  public gender: string | null = null;
  

  constructor(item: NonNullable<IUser>) {
    this._setId(item);
    this._setName(item);
    this._setEmail(item);
    this._setAge(item);
    this._setImage(item);
    this._setPhone(item);
    this._setAddress(item);
    this._setCountry(item);
    this._setGender(item);
  }

  private _setId({ id }: { id: string }) {
    this.id = id ?? '';
  }
  private _setName({ name }: { name: string| null }) {
    this.name = name;
  }
  private _setEmail({ email }: { email: string | null }) {
    this.email = email ?? '';
  }
  private _setAge({ age }: { age: string | null}) {
    this.age = age;
  }
  private _setImage({ image }: { image: string | null }) {
      this.image = image;
  }
  private _setPhone({ phone }: { phone: string | null }) {
      this.phone = phone;
  }
  private _setAddress({ address }: { address: string | null }) {
    this.address = address;
  }
  private _setCountry({ country }: { country: string | null }) {
      this.country = country;
  }
  private _setGender({ gender }: { gender: string  | null}) {
      this.gender = gender;
  }
}
