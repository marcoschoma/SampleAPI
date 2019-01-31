using System;
using System.Collections.Generic;
using Sample.Entity;
using System.IO;

namespace Sample.Repository
{
    public class ProductRepository
    {
        private static List<Product> _productList;
        public ProductRepository()
        {
            var reader = new StreamReader("");
            _productList = new List<Product>() {
                new Product() { Id = 1, Description = "Product 1" },
                new Product() { Id = 2, Description = "Product 2" },
                new Product() { Id = 3, Description = "Product 3" },
                new Product() { Id = 4, Description = "Product 4" }
            };
        }

        public List<Product> GetProducts() => _productList;

        public Product GetProduct(int id) => _productList.Find(p => p.Id == id);

    }
}
