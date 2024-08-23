"""empty message

Revision ID: c19d8294a174
Revises: 45a7f42023c9
Create Date: 2024-08-22 12:39:42.334473

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c19d8294a174'
down_revision = '45a7f42023c9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('aa')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('aa', sa.BOOLEAN(), autoincrement=False, nullable=False))

    # ### end Alembic commands ###