import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStationInput {
  @Field()
  name: string;

  @Field()
  planetName: string;

  @Field()
  hasStation: boolean;

  @Field({ nullable: true })
  stationStatus?: string;
}
