import { Field } from "@nestjs/graphql";
import { CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CoreEntity{
    
    @PrimaryColumn()
    @Field(()=>Number)
    id:number;
    
    @CreateDateColumn()
    @Field(()=>Date)
    createdAt:Date;

    
    @UpdateDateColumn()
    @Field(()=>Number)
    updatedAt:Date;
}