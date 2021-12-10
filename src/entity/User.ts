import {Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';


@Entity()

export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    //Colunas do Banco de dados
    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    accountNumber: number;
    
    @Column()
    accountDigit: number;
    
    @Column()
    wallet: number;

    @Column()
    email: string;

    @Column()
    password: string;
    

   

}