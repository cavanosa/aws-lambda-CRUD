package com.tutorial.dynamocrud;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import java.util.ArrayList;
import java.util.List;

public class Handler implements RequestHandler<Request, Object> {
    @Override
    public Object handleRequest(Request request, Context context) {

        AmazonDynamoDB db = AmazonDynamoDBClientBuilder.defaultClient();
        DynamoDBMapper mapper = new DynamoDBMapper(db);
        Producto producto = null;

        switch (request.getHttpMethod()) {
            case "GET":
                if (request.getId() == 0) {
                    List<Producto> productos = new ArrayList<>();
                    productos = mapper.scan(Producto.class, new DynamoDBScanExpression());
                    return productos;
                } else {
                    producto = mapper.load(Producto.class, request.getId());
                    return producto;
                }
            case "POST":
                producto = request.getProducto();
                mapper.save(producto);
                return producto;
            case "DELETE":
                producto = mapper.load(Producto.class, request.getId());
                if (producto != null)
                    mapper.delete(producto);
                return producto;
        }
        return null;
    }
}
