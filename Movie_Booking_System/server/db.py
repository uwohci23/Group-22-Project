import sqlite3
import typing

class Database:
    def __init__(self) -> None:
        self.connection = sqlite3.connect('database.db', check_same_thread=False)
        self.cursor = self.connection.cursor()
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS movie (
                movie_id INTEGER PRIMARY KEY,
                title TEXT UNIQUE,
                image_url TEXT,
                release_date DATE,
                age_rating TEXT
            )
        ''')
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS user (
                user_id INTEGER PRIMARY KEY,
                username TEXT,
                priv_key TEXT,
                hash_password TEXT,
                email TEXT,
                first_name TEXT,
                last_name TEXT,
                admin_status INTEGER
            )
        ''')
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS ticket (
                ticket_id INTEGER PRIMARY KEY,
                movie_id TEXT,
                user_id TEXT,
                theatre_id TEXT,
                seat_number TEXT,
                movie_date DATE,
                FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
                FOREIGN KEY (user_id) REFERENCES user(user_id)
            )
        ''')
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS receipt (
                receipt_id INTEGER PRIMARY KEY,
                ticket_id TEXT,
                user_id TEXT,
                total_tickets INTEGER,
                issue_date DATE,
                FOREIGN KEY (user_id) REFERENCES user(user_id)
            )
        ''')
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS bookmarks ( 
            bookmark_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            movie_id INTEGER,
            FOREIGN KEY (user_id) REFERENCES user(user_id),
            FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
            )
        ''')
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS theatre (
                theatre_id INTEGER PRIMARY KEY AUTOINCREMENT,
                movie_id INTEGER,
                movie_title TEXT,
                current_seats INTEGER,
                FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
            )
        ''')
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS seat (
                seat_id INTEGER PRIMARY KEY AUTOINCREMENT,
                theatre_id INTEGER,
                row_number INTEGER,
                column_number INTEGER,
                status INTEGER,
                FOREIGN KEY (theatre_id) REFERENCES theatre(theatre_id)
            )
        ''')
        self.connection.commit()

    def add_seats(self, movie_title: str, row_number: int, column_number: int, status: int) -> bool:
        try:
            data = self.get_theatre_by_movie_title(movie_title)
            theatre_id = data['theatre_id']
            print("Theatre ID: ", theatre_id)
            self.cursor.execute('''
                INSERT INTO seat (theatre_id, row_number, column_number, status)
                VALUES (?, ?, ?, ?)
            ''', (theatre_id, row_number, column_number, status))
            self.connection.commit()
            return True
        except sqlite3.Error:
            return False
    
    def get_seats(self, movie_title: str) -> typing.List[dict]:
        data = self.get_theatre_by_movie_title(movie_title)
        theatre_id = data['theatre_id']
        self.cursor.execute('''
            SELECT * FROM seat WHERE theatre_id = ?
        ''', (theatre_id,))
        data = self.cursor.fetchall()
        print(data)
        # return {
        #     "seat_id": data[0],
        #     "theatre_id": data[1],
        #     "row_number": data[2],
        #     "column_number": data[3],
        #     "status": data[4]
        # }
        return data

    def add_theatre(self, movie_title: str, current_seats: int) -> bool:
        try:
            data = self.get_movie_by_title(movie_title)
            movie_id = data['movie_id']
            print("Movie ID: ", movie_id)
            self.cursor.execute('''
                INSERT INTO theatre (movie_id, movie_title, current_seats)
                VALUES (?, ?, ?)
            ''', (movie_id, movie_title, current_seats))
            self.connection.commit()
            return True
        except sqlite3.Error:
            return False

    def add_movie(self, title: str, image_url: str, release_date: str, age_rating: str) -> bool:
        try:
            self.cursor.execute('''
                INSERT INTO movie (title, image_url, release_date, age_rating)
                VALUES (?, ?, ?, ?)
            ''', (title, image_url, release_date, age_rating))
            self.connection.commit()
            return True
        except sqlite3.Error:
            return False
    
    def add_user(self, username: str, priv_key: str, hash_password: str,
        email: str, first_name: str, last_name: str, admin_status: int) -> bool:
        try:
            self.cursor.execute('''
                INSERT INTO user (username, priv_key, hash_password, email, first_name, last_name, admin_status)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ''', (username, priv_key, hash_password, email, first_name, last_name, admin_status))
            self.connection.commit()
            return True
        except sqlite3.Error:
            return False
    
    def get_theatre(self, theatre_id: int) -> typing.List[dict]:
        self.cursor.execute('''
            SELECT * FROM theatre WHERE theatre_id = ?
        ''', (theatre_id,))
        data = self.cursor.fetchall()
        print("theatre Data: ", data)
        if data is None:
            return None
        return {
            'theatre_id': data[0],
            'movie_id': data[1],
            'movie_title': data[2],
            'current_seats': data[3]
        }

    def get_theatre_by_movie_title(self, movie_title: str) -> typing.Optional[dict]:
        print("Movie Title: ", movie_title)
        self.cursor.execute('''
            SELECT * FROM theatre WHERE movie_title = ?
        ''', (movie_title,))
        data = self.cursor.fetchone()
        print("Data: ", data)
        if data is None:
            return None
        return {
            'theatre_id': data[0],
            'movie_id': data[1],
            'movie_title': data[2],
            'current_seats': data[3]
        }
    def get_movie_by_title(self, movie_title: str) -> typing.Optional[dict]:
        self.cursor.execute('''
            SELECT * FROM movie WHERE title = ?
        ''', (movie_title,))
        data = self.cursor.fetchone()
        if data is None:
            return None
        return {
            'movie_id': data[0],
            'movie_title': data[1],
            'image_url': data[2],
            'release_date': data[3],
            'age_rating': data[4],
        }
    def get_user_by_username(self, username: str) -> typing.Optional[dict]:
        self.cursor.execute('''
            SELECT * FROM user WHERE username = ?
        ''', (username,))       
        data = self.cursor.fetchone()
        if data is None:
            return None
        return {
            'user_id':  data[0],
            'username': data[1],
            'priv_key': data[2],
            'hash_password': data[3],
            'email': data[4],
            'first_name': data[5],
            'last_name': data[6],
            'admin_status': data[7]
        } 
    
    def get_user_by_id(self, user_id: str) -> typing.Optional[dict]:
        self.cursor.execute('''
            SELECT * FROM user WHERE user_id = ?
        ''', (user_id,))
        data = self.cursor.fetchone()
        if data is None:
            return None
        return {
            'user_id': data[0],
            'username': data[1],
            'priv_key': data[2],
            'hash_password': data[3],
            'email': data[4],
            'first_name': data[5],
            'last_name': data[6],
            'admin_status': data[7]
        }
    
    def get_movie(self, movie_id: int) -> typing.Optional[dict]:
        self.cursor.execute('''
            SELECT * FROM movie WHERE movie_id = ?
        ''', (movie_id,))
        data = self.cursor.fetchone()
        if data is None:
            return None
        return {
            'movie_id': data[0],
            'title': data[1],
            'image_url': data[2],
            'release_date': data[3],
            'age_rating': data[4],
        }
    
    def get_all_movies(self) -> typing.List[dict]:
        self.cursor.execute('''
            SELECT * FROM movie
        ''')
        data = self.cursor.fetchall()
        if data is None:
            return []
        return [{
            'movie_id': row[0],
            'title': row[1],
            'image_url': row[2],
            'release_date': row[3],
            'age_rating': row[4],
        } for row in data]
    
    def add_receipt(self, ticket_id: str, user_id: str, total_tickets: int) -> bool:
        try:
            self.cursor.execute('''
                INSERT INTO receipt (ticket_id, user_id, total_tickets)
                VALUES (?, ?, ?)
            ''', (ticket_id, user_id, total_tickets))
            self.connection.commit()
            return True
        except sqlite3.Error:
            return False
    
    def get_booked_seats(self, theatre_id: str):
        self.cursor.execute('''
            SELECT * FROM theatre WHERE theatre_id = ?
        ''', (theatre_id,))
        data = self.cursor.fetchall()
        if data is None:
            return None
        
        users_id: str = data[1]

        return users_id.split(',')

    def get_ticket(self, ticket_id: int) -> typing.Optional[dict]:
        self.cursor.execute('''
            SELECT * FROM ticket WHERE ticket_id = ?
        ''', (ticket_id,))
        data = self.cursor.fetchone()
        if data is None:
            return None
        return {
            'ticket_id': data[0],
            'movie_id': data[1],
            'user_id': data[2],
            'seat_number': data[3],
            'movie_date': data[4],
        }
    
    def add_ticket(self, theatre_id: str, movie_id: str, user_id: str, seat_number: str, movie_date: str) -> bool:
        try:
            # check if seat is taken
            # for all users in users_id (theatre)
            #     for seat_number of user (ticket table)
            #        if seat_number == seat_number:

            users = self.get_booked_seats(theatre_id)
            for user in users:
                self.cursor.execute('''
                    SELECT * FROM ticket WHERE user_id = ?
                ''', (user,))
                tickets = self.cursor.fetchall()
                for ticket in tickets:
                    if ticket[3] == seat_number:
                        return False
            
            self.cursor.execute('''
                INSERT INTO ticket (movie_id, user_id, seat_number, movie_date)
                VALUES (?, ?, ?, ?)
            ''', (movie_id, user_id, seat_number, movie_date))

            # add seat to theatre
            users.append(user_id)
            users_id = ','.join(users)

            # fetch current_seats
            self.cursor.execute('''
                SELECT * FROM theatre WHERE theatre_id = ?
            ''', (theatre_id,))
            data = self.cursor.fetchone()
            current_seats = data[2]

            # update theatre
            self.cursor.execute('''
                UPDATE theatre SET users_id = ?, current_seats = ?
                WHERE theatre_id = ?
            ''', (users_id, current_seats - 1, theatre_id))

            self.connection.commit()
            return True
        except sqlite3.Error:
            return False


    def get_bookmarks(self, user_id:int) -> typing.Optional[dict]:
        self.cursor.execute(''' 
            SELECT bookmarks.movie_id,movie.title,movie.image_url,movie.release_date,movie.age_rating,bookmarks.user_id
            FROM bookmarks 
            INNER JOIN movie ON bookmarks.movie_id = movie.movie_id
            WHERE bookmarks.user_id = ?''',(user_id,))
        
        bookmarks = self.cursor.fetchall()
        print(bookmarks)
        if bookmarks:
            return [{
            'movie_id': row[0],
            'title': row[1],
            'image_url': row[2],
            'release_date': row[3],
            'age_rating': row[4],
            'user_id': row[5]
                
            } for row in bookmarks]
        else: 
            return None

        
    def add_bookmark(self,user_id: int, movie_id: str) -> bool:
        try: 
            self.cursor.execute('INSERT INTO bookmarks (user_id, movie_id) VALUES (?, ?)', (user_id, movie_id))
            self.connection.commit()
            return True
        except sqlite3.Error as error:
            print('Failed to add bookmark:', error)
            return False
        
    def delete_bookmark(self,user_id: int, movie_id: str) -> bool:
        try: 
            self.cursor.execute('DELETE FROM bookmarks WHERE user_id = ? AND movie_id =?', (user_id, movie_id))
            self.connection.commit()
            return True
        except sqlite3.Error as error:
            print('Failed to add bookmark:', error)
            return False
        

    def get_all_bookmarks(self) -> typing.List[dict]:
        self.cursor.execute('''
            SELECT * FROM bookmarks
        ''')
        data = self.cursor.fetchall()
        if data is None:
            return []
        return [{
            'bookmark_id': row[0],
            'user_id': row[1],
            'movie_id': row[2],
        } for row in data]

    def get_all_users(self) -> typing.Optional[dict]:
        
        self.cursor.execute('''
            SELECT * FROM user
        ''')
        data = self.cursor.fetchall()
        if data is None:
            return None
        return [{
            'user_id': row[0],
            'username': row[1],
            'priv_key': row[2],
            'hash_password': row[3],
            'email': row[4],
            'first_name': row[5],
            'last_name': row[6],
            'admin_status': row[7]
        } for row in data]
    