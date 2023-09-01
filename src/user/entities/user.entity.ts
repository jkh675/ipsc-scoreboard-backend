import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: "user" })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    uid: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    username: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    division: string;

    @Column()
    team: string; //TODO: wait for team entity implementation

    @Column()
    picture: string; //TODO: wait for media service implementation

    @Column()
    password: string; //WARN: needs encrypt service A.S.A.P.

    @Column({ default: true })
    isActive: boolean;
}
