using System;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class BasketController : BaseApiController
{
    private readonly StoreContext _context;

    public BasketController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<Basket>> GetBasket()
    {
        var basket = await _context.Baskets
            .Include(basket => basket.Items)
            .ThenInclude(basketItem => basketItem.Product)
            .FirstOrDefaultAsync(basket => basket.BuyerId == Request.Cookies["buyerId"]);

        if (basket == null)
        {
            return NotFound();
        }

        return basket;
    }

    [HttpPost]
    public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
    {
        // TODO
        // Get basket
        // Create basket if not exists
        // Get product
        // Add item
        // save changes
        return StatusCode(201);
    }

    [HttpDelete]
    public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
    {
        // TODO
        // Get basket
        // Remove item or reduce quantity
        // Save chnages
        return Ok();
    }
}