import React from "react";
import { Badge, Card } from "antd";

const { Meta } = Card;

export const DashboardCard = ({ imageSrc, title, visitorsCount }) => {
  return (
    <Badge count={visitorsCount}>
      <Card
        hoverable
        style={{ width: 180 }}
        cover={<img alt={title} src={imageSrc} />}
        className="shadow-sm"
      >
        <Meta title={title} className="text-center" />
      </Card>
    </Badge>
  );
};
