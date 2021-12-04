import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { RestaurantsModule } from "./restaurants/restaurants.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test",
      ignoreEnvFile: process.env.NODE_ENV === "prod",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      /* password 는 postgre, db, ROLE 세 개가 있는데, 그 중 ROLE 의 비밀번호이다.
      */
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      // autoSchemaFile: join(process.cwd(), "src/schema.gql"),
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
