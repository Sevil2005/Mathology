from app import app
from flask import render_template


@app.route('/admin')
def admin_index():
    return render_template('/admin/starter.html')

@app.route('/admin/students')
def students():
    return render_template('/admin/students.html')