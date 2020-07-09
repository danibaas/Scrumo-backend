import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Card extends BaseEntity {
    constructor(cardId: string, cardName: string, cardDescription: string) {
        super();
        this.cardId = cardId;
        this.cardName = cardName;
        this.cardDescription = cardDescription;
    }

    @PrimaryGeneratedColumn()
    cardId: string;

    @Column()
    cardName: string;

    @Column()
    cardDescription: string;
}