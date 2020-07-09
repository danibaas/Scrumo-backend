import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class List extends BaseEntity {
    constructor(listId: string, listName: string) {
        super();
        this.listId = listId;
        this.listName = listName;
    }

    @PrimaryGeneratedColumn()
    listId: string;

    @Column()
    listName: string;
}