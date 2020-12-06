import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { Platform, ToastController } from '@ionic/angular';


export class connect_db_audit
{
    public database:SQLiteObject;
    constructor(
      public sqlite: SQLite, 
       
       public platform: Platform
        ) { 
          this.sqlite.create({
            name: 'AUDIT_DB.db',
            location: 'default'
          })
          .then((db: SQLiteObject) => {
              this.database = db; //set the object to your own var
              db.executeSql("CREATE TABLE USER_TB(_id integer primary key autoincrement,EMP_ID text not null, EMP_NAME text not null,EMAIL text not null,PASSWORD text not null,BU_ID integer not null,BU_NAME text not null);", []);
          });
           
        }
    public akahay()
    {return this.database;


    }

}