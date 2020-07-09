import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    constructor(email: string, fullname: string, passwordHash?: string) {
        super();
        this.email = email;
        this.fullname = fullname;
        this.passwordHash = passwordHash ? passwordHash : "";
    }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  fullname: string;

  @Column()
  passwordHash: string;
}