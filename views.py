from flask import Blueprint, render_template, send_from_directory

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")


@views.route("/views/<path:filename>")
def serve_static(filename):
    return send_from_directory("views", filename)