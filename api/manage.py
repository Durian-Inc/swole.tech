"""Helper program to make OS level operations on PostgreSQL tables"""
import argparse
import time

from serve import db
from models import tables


def create_all():
    """Initialize the tables for each model defined in the app"""
    with db:
        db.create_tables(tables)


def create_some(table_names):
    """Initialize the table for one specific model input by the user"""
    targets = []
    for table in tables:
        for table_name in table_names:
            if table_name == type(table).__name__:
                targets.append(table)
    if targets:
        with db:
            db.create_tables(targets)
    else:
        print("Enter valid tables")


def drop_all():
    """Drop the tables for each model defined in the app"""
    with db:
        db.drop_tables(tables)


def drop_some(table_names):
    """Initialize the table for one specific model input by the user"""
    targets = []
    for table in tables:
        for table_name in table_names:
            if table_name == type(table).__name__:
                targets.append(table)
    if targets:
        with db:
            db.drop_tables(targets)
    else:
        print("Enter valid tables")


def parse_args():
    """
    Handles command line arguments and returns the passed parameters as a
    namespace
    """
    parser = argparse.ArgumentParser(
        description="Manage the application database")
    parser.add_argument(
        "-c",
        "--create",
        help=
        "Create a table, or typing \"all\" will create all tables. May be repeated.",
        action='append')
    parser.add_argument(
        "-d",
        "--drop",
        help=
        "Drop a table, or typing \"all\" will drop all tables. May be repeated.",
        action='append')
    args = parser.parse_args()
    if args.create is None and args.drop is None:
        parser.print_help()
        return None
    return args


def handle_args(args):
    """Takes passed namespace(args) and decides which operations to perform"""

    if args is None:
        return

    if args.create and "all" in args.create:
        print("CREATING ALL TABLES IN 4 SECONDS. CANCEL WITH CONTROL+C.")
        time.sleep(4)
        create_all()
        return
    if args.drop and "all" in args.drop:
        print("DROPPING ALL TABLES IN 4 SECONDS. CANCEL WITH CONTROL+C.")
        time.sleep(4)
        drop_all()
        return
    if args.create:
        print("Creating:", args.create)
        create_some(args.create)
    if args.drop:
        print("Dropping:", args.drop)
        drop_some(args.drop)


if __name__ == "__main__":
    handle_args(parse_args())
