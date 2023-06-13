import typegoose, { Ref, defaultClasses } from '@typegoose/typegoose';

import { UserEntity } from '../user/user.entity.js';
import { CityName } from '../../types/city.type.js';
import { OfferType } from '../../types/offer-type.type.js';
import { Goods } from '../../types/goods.type.js';

const {prop, modelOptions} = typegoose;

class Location {
  @prop({required: true})
  public latitude!: number;

  @prop({required: true})
  public longitude!: number;
}

class City {
  @prop({required: true, type: () => String, enum: CityName})
  public name!: CityName;

  @prop({required: true})
  public latitude!: number;

  @prop({required: true})
  public longitude!: number;
}

export interface RentOfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'rent-offers'
  }
})
export class RentOfferEntity extends defaultClasses.TimeStamps {

  @prop({required: true, trim: true})
  public title!: string;

  @prop({required: true, trim: true})
  public description!: string;

  @prop()
  public offerDate?: Date;

  @prop({required: true, _id: false})
  public city!: City;

  @prop({required: true})
  public previewImage!: string;

  @prop({required: true, type: () => [String]})
  public images!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop()
  public isFavorite?: boolean;

  @prop({default: 0})
  public rating!: number;

  @prop({required: true, type: () => String, enum: OfferType })
  public type!: OfferType;

  @prop({required: true})
  public bedrooms!: number;

  @prop({required: true})
  public maxAdults!: number;

  @prop({required: true})
  public price!: number;

  @prop({required: true, type: () => [String], enum: Goods })
  public goods!: Goods[];

  @prop({ref: () => UserEntity, required: true })
  public advertiserId!: Ref<UserEntity>;

  @prop({default: 0})
  public commentsCount!: number;

  @prop({required: true, _id: false})
  public location!: Location;
}

// export const RentOfferModel = getModelForClass(RentOfferEntity);

