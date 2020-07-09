import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
    constructor(boardId: string, boardName: string) {
        super();
        this.boardId = boardId;
        this.boardName  = boardName;
    }

    @PrimaryGeneratedColumn()
    boardId: string;

    @Column()
    boardName: string;
}
