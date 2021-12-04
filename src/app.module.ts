import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { RestaurantsModule } from "./restaurants/restaurants.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      // autoSchemaFile: join(process.cwd(), "src/schema.gql'),
      /* GrpahQL Schema 파일을 메모리에 보관할지 경롯 상에 생성할지를 결정짓는다.
        true 로하면 메모리 상에서만 보관하고
        join() 을 이용하면 지정한 경로 상에 생성한다.
      */
    }),
    RestaurantsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
