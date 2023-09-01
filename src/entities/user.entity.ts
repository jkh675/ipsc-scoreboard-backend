import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from "typeorm";

@Entity({ name: "user" })
export class EUser extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    division: string;

    @Column()
    team: string; //TODO: wait for team entity implementation

    @Column()
    picture: string; //TODO: wait for media service implementation
}
