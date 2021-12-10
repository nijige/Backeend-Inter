import {Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from 'typeorm';

import { User } from './User';


@Entity()

export class Pix{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    //Colunas do Banco de dados
    @Column()
    status:string;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requestingUser: User;

    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn()
    payingUser: User;

    @Column()
    value:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}