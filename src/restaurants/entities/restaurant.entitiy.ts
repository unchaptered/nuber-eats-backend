import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Entity, Column, PrimaryColumn } from "typeorm";
import { IsBoolean, IsNumber, IsOptional, IsString, Length } from "class-validator";

@InputType({isAbstract:true})
@ObjectType()
@Entity()
export class Restaurant {
    /* @ObjectType() 은 Nest 에서 사용할 Object 의 타입을 선언해두는 개념이다.
        클래스의 멤버 변수와 같이, Field 로 이루어진 값들을 가지고 있다.

        1. 필드 설정
            @Field(()=>String) 은 GrpahQL Query 선언문이다.
            기본적으로 모든 Restaurant 는 name:String 을 필수값으로 가져야 한다.
            이를 선택할 수 있게 옵션을 설정하고 싶다면 새 매개변수로 { nullable: true } 를 주면 된다.
            @Field(()=>String, { nullable: true })

        2. TS Entity 설정
            name: string 은 TS 의 Entity 선언문이다.
            기본적으로 모든 Restaurant 는 name:String 을 필수값으로 가지게 된다.
            이를 선택할 수 있게 하려면 name 을 name? 으로 바꾸면 된다.
            name?:string

        다음 Commit 에서는 ArgsType 을 알아보겠다.
    */

    @Field(()=>Number)
    @PrimaryColumn()
    @IsNumber()
    id: number;

    @Field(()=>String)
    @Column()
    @Length(5,10)
    name: string;

    /*각 @Decorator 의 목적성 차이
        @Field() 는 GraphQL Query 용
        @Column() 은 PostgreSQL key 용
        @IsOptional(), @IsBoolean() 은 Nest.JS Type 용
    */
    /*defaultValue 와 nullable 의 차이
        { defaultValue: true } 는 매개변수로 입력되지 않았을 경우에 기본값을 의미한다.
        { nullable: true } 는  값이 입력되지 않음(null) 상태를 허용할 것인가를 의미한다.
   */
    @Field(()=>Boolean, { nullable: true })
    @Column({ nullable: true })
    @IsOptional()
    @IsBoolean()
    isVegan: boolean;

    @Field(()=>String, { defaultValue: "none" })
    @Column({ default: "none" })
    @IsOptional()
    @IsString()
    address: string;
}